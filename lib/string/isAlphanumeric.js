const isString = require("../object/isString.js");

const alphanumeric = 
{
    "en-US": /^[0-9A-Z]+$/i,
    "bg-BG": /^[0-9А-Я]+$/i,
    "cs-CZ": /^[0-9A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ]+$/i,
    "da-DK": /^[0-9A-ZÆØÅ]+$/i,
    "de-DE": /^[0-9A-ZÄÖÜß]+$/i,
    "el-GR": /^[0-9Α-ω]+$/i,
    "es-ES": /^[0-9A-ZÁÉÍÑÓÚÜ]+$/i,
    "fr-FR": /^[0-9A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ]+$/i,
    "it-IT": /^[0-9A-ZÀÉÈÌÎÓÒÙ]+$/i,
    "hu-HU": /^[0-9A-ZÁÉÍÓÖŐÚÜŰ]+$/i,
    "nb-NO": /^[0-9A-ZÆØÅ]+$/i,
    "nl-NL": /^[0-9A-ZÁÉËÏÓÖÜÚ]+$/i,
    "nn-NO": /^[0-9A-ZÆØÅ]+$/i,
    "pl-PL": /^[0-9A-ZĄĆĘŚŁŃÓŻŹ]+$/i,
    "pt-PT": /^[0-9A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ]+$/i,
    "ru-RU": /^[0-9А-ЯЁ]+$/i,
    "sk-SK": /^[0-9A-ZÁČĎÉÍŇÓŠŤÚÝŽĹŔĽÄÔ]+$/i,
    "sr-RS@latin": /^[0-9A-ZČĆŽŠĐ]+$/i,
    "sr-RS": /^[0-9А-ЯЂЈЉЊЋЏ]+$/i,
    "sv-SE": /^[0-9A-ZÅÄÖ]+$/i,
    "tr-TR": /^[0-9A-ZÇĞİıÖŞÜ]+$/i,
    "uk-UA": /^[0-9А-ЩЬЮЯЄIЇҐі]+$/i,
    "ar": /^[٠١٢٣٤٥٦٧٨٩0-9ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ]+$/,
};

/**
 * Evaluate if a string is an alphanumeric string.
 * @param   {String}    str         The string to evaluate
 * @param   {String}    locale      The locate to check for 
 * @returns {Boolean}               True if the string is an alphanumeric string, false otherwise
 */
function isAlphanumeric(str, locale = "fr-FR") 
{
    if (!isString(str))
        return false;

    str = str.replace(/\s/g, '');

    if (locale in alphanumeric)
        return alphanumeric[locale].test(str);

    throw new Error(`Cannot check alphanumeric on locale ${locale}`);
}

module.exports = isAlphanumeric;