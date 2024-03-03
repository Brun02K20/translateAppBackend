import * as deepl from 'deepl-node'

const authKey = '1328b9f4-df8e-47da-8cd3-f3fe8137a23f:fx' // Replace with your key
const translator = new deepl.Translator(authKey)

// eslint-disable-next-line @typescript-eslint/no-misused-promises
export async function translate ({
    fromLanguage,
    toLanguage,
    text
}: {
    fromLanguage: deepl.SourceLanguageCode | null
    toLanguage: deepl.TargetLanguageCode
    text: string
}): Promise<string | null> {
    if (fromLanguage === toLanguage) return text

    const result = await translator.translateText(
        text,
        fromLanguage,
        toLanguage
    )

    return result.text
}
