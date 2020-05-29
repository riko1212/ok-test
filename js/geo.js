function geoplugin_request() { return '37.115.189.14';}
function geoplugin_status() { return '200';}
function geoplugin_credit() { return 'Some of the returned data includes GeoLite data created by MaxMind, available from <a href=\'https://www.maxmind.com\'>http://www.maxmind.com</a>.';}
function geoplugin_delay() { return '1ms';}
function geoplugin_city() { return 'Lviv';}
function geoplugin_region() { return 'L\'vivs\'ka Oblast\'';}
function geoplugin_regionCode() { return '46';}
function geoplugin_regionName() { return 'L\'vivs\'ka Oblast\'';}
function geoplugin_areaCode() { return '';}
function geoplugin_dmaCode() { return '';}
function geoplugin_countryCode() { return 'UA';}
function geoplugin_countryName() { return 'Ukraine';}
function geoplugin_inEU() { return 0;}
function geoplugin_euVATrate() { return ;}
function geoplugin_continentCode() { return 'EU';}
function geoplugin_latitude() { return '49.8486';}
function geoplugin_longitude() { return '24.0323';}
function geoplugin_locationAccuracyRadius() { return '10';}
function geoplugin_timezone() { return 'Europe/Kiev';}
function geoplugin_currencyCode() { return 'UAH';}
function geoplugin_currencySymbol() { return '&#8372;';}
function geoplugin_currencySymbol_UTF8() { return '₴';}
function geoplugin_currencyConverter(amt, symbol) {
    if (!amt) { return false; }
    var converted = amt * 26.8981;
    if (converted <0) { return false; }
    if (symbol === false) { return Math.round(converted * 100)/100; }
    else { return '&#8372;'+(Math.round(converted * 100)/100);}
    return false;
}