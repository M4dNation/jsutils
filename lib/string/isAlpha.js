const isString = require("../object/isString.js");

const alpha = 
{
    "en-US": /^[A-Z]+$/i,
    "bg-BG": /^[А-Я]+$/i,
    "cs-CZ": /^[A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ]+$/i,
    "da-DK": /^[A-ZÆØÅ]+$/i,
    "de-DE": /^[A-ZÄÖÜß]+$/i,
    "el-GR": /^[Α-ω]+$/i,
    "es-ES": /^[A-ZÁÉÍÑÓÚÜ]+$/i,
    "fr-FR": /^[A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ]+$/i,
    "it-IT": /^[A-ZÀÉÈÌÎÓÒÙ]+$/i,
    "nb-NO": /^[A-ZÆØÅ]+$/i,
    "nl-NL": /^[A-ZÁÉËÏÓÖÜÚ]+$/i,
    "nn-NO": /^[A-ZÆØÅ]+$/i,
    "hu-HU": /^[A-ZÁÉÍÓÖŐÚÜŰ]+$/i,
    "pl-PL": /^[A-ZĄĆĘŚŁŃÓŻŹ]+$/i,
    "pt-PT": /^[A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ]+$/i,
    "ru-RU": /^[А-ЯЁ]+$/i,
    "sk-SK": /^[A-ZÁČĎÉÍŇÓŠŤÚÝŽĹŔĽÄÔ]+$/i,
    "sr-RS@latin": /^[A-ZČĆŽŠĐ]+$/i,
    "sr-RS": /^[А-ЯЂЈЉЊЋЏ]+$/i,
    "sv-SE": /^[A-ZÅÄÖ]+$/i,
    "tr-TR": /^[A-ZÇĞİıÖŞÜ]+$/i,
    "uk-UA": /^[А-ЩЬЮЯЄIЇҐі]+$/i,
    "ar": /^[ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ]+$/,
};

/**
 * Evaluate if a string is an alpha string.
 * @param   {String}    str         The string to evaluate
 * @param   {String}    locale      The locate to check for
 * @returns {Boolean}               True if the string is an alpha string, false otherwise
 */
function isAlpha(str, locale = "fr-FR") 
{
    if (!isString(str))
        return false;

    str = str.replace(/\s/g, '');

    if (locale in alpha)
        return alpha[locale].test(str);

    throw new Error(`Cannot check alpha on locale ${locale}`);
}

module.exports = isAlpha;