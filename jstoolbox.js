
class Env
{
    /**
     * getEnv
     * This function is used in order to get current running environment.
     * @return  {Object}   env    The current environment (self or window client side, global in nodejs server side).
     */
    static getEnv()
    {
        if (typeof self !== "undefined")
            return self;
	    else if (typeof window !== "undefined")
            return window;
	    else if (typeof global !== "undefined")
            return global;

        throw new Error("unable to locate environment object");
    }

    /**
     * getWindowObject
     * This function is used in order to get the window object reference.
     * @return  {Window}  The window object if client side, false otherwise.
     */
    static getWindowObject()
    {
        if (typeof window !== "undefined")
            return window;

        return false;
    }

    /**
     * getSelf
     * This function is used in order to get the self object reference.
     * @return  {Object}  The self object if client side, false otherwise.
     */
    static getSelf()
    {
        if (typeof self !== "undefined")
            return self;

        return false;
    }

    /**
     * getGlobal
     * This function is used in order to get the global object reference.
     * @return  {Object}  The global object if server side (nodejs), false otherwise.
     */
    static getGlobal()
    {
        if (typeof global !== "undefined")
            return global;

        return false;
    }

    /**
     * getDocument
     * This function is used in order to get the document object reference.
     * @return  {Object}  The document object if client side, false otherwise.
     */
    static getDocument()
    {
        let env = Env.getSelf();

        if (env)
            return env.document;

        return false;
    }

    /**
     * getNavigator
     * This function is used in order to get the navigator object reference.
     * @return  {Object}  The navigator object if client side, false otherwise.
     */
    static getNavigator()
    {
        let env = Env.getSelf();

        if (env)
            return env.navigator;

        return false;
    }

    /**
     * getAppVersion
     * This function is used in order to get the application version of the current browser.
     * @return  {String}  The application version as a lower case string.
     */
    static getAppVersion()
    {
        let navigator = Env.getNavigator();

        if (navigator)
            return (navigator.appVersion || '').toLowerCase();
    }

    /**
     * getUserAgent
     * This function is used in order to get the user agent of the current browser.
     * @return  {String}  The user agent as a lower case string.
     */
    static getUserAgent()
    {
        let navigator = Env.getNavigator();

        if (navigator)
            return (navigator.userAgent || '').toLowerCase();
    }

    /**
     * getVendor
     * This function is used in order to get the vendor of the current browser.
     * @return  {String}  The vendor as a lower case string.
     */
    static getVendor()
    {
        let navigator = Env.getNavigator();

        if (navigator)
            return (navigator.vendor || '').toLowerCase();
    }

    /**
     * compareVersion
     * This function is used in order to compare number version of given environment, internal use only.
     * @param   {String}   version The actual version of the environment.
     * @param   {Number}   range The reference version to compare with.
     * @return  {Boolean}  True if provided version match actual version of given environment, false otherwise.
     */
    static compareVersion(version, range)
    {
        var comparator =
        {
            '<': function(a, b) { return a < b; },
            '<=': function(a, b) { return a <= b; },
            '>': function(a, b) { return a > b; },
            '>=': function(a, b) { return a >= b; }
        };

        var string = (range + '');
        var n = +(string.match(/\d+/) || NaN);
        var op = string.match(/^[<>]=?|/)[0];

        return comparator[op] ? comparator[op](version, n) : (version == n || n !== n);
    }

    /**
     * isAndroid
     * This function is used in order to know if current environment uses Android.
     * @return  {Boolean} True if current environment uses Android, false otherwise.
     */
    static isAndroid()
    {
        return /android/.test(Env.getUserAgent());
    }

    /**
     * isAndroidPhone
     * This function is used in order to know if current device is an Android phone.
     * @return  {Boolean} True if current device is an Android phone, false otherwise.
     */
    static isAndroidPhone()
    {
        return Env.isAndroid() && /mobile/.test(Env.getUserAgent());
    }

    /**
     * isAndroidTablet
     * This function is used in order to know if current device is an Android tablet.
     * @return  {Boolean} True if current device is an Android tablet, false otherwise.
     */
    static isAndroidTablet()
    {
        return Env.isAndroid() && !/mobile/.test(Env.getUserAgent());
    }

    /**
     * isBlackberry
     * This function is used in order to know if current device is a Blackberry.
     * @return  {Boolean} True if current device is a Blackberry, false otherwise.
     */
    static isBlackberry()
    {
        let userAgent = Env.getUserAgent();

        return /blackberry/.test(userAgent) || /bb10/.test(userAgent);
    }

    /**
     * isChrome
     * This function is used in order to know if current browser is Google Chrome.
     * @return  {Boolean} True if current browser is Google Chrome, false otherwise.
     */
    static isChrome(range)
    {
        let userAgent = Env.getUserAgent();
        let match = /google inc/.test(Env.getVendor()) ? userAgent.match(/(?:chrome|crios)\/(\d+)/) : null;

        return match !== null && !Env.isOpera() && Env.compareVersion(match[1], range);
    }

    /**
     * isDesktop
     * This function is used in order to know if current environment is a desktop one.
     * @return  {Boolean} True if current environment is a desktop one, false otherwise.
     */
    static isDesktop()
    {
        return !Env.isMobile() && !Env.isTablet();
    }

    /**
     * isEdge
     * This function is used in order to know if current browser is Microsoft Edge.
     * @return  {Boolean} True if current browser is Microsoft Edge, false otherwise.
     */
    static isEdge(range)
    {
        var match = Env.getUserAgent().match(/edge\/(\d+)/);

        return match !== null && Env.compareVersion(match[1], range);
    }

    /**
     * isFirefox
     * This function is used in order to know if current browser is Mozilla Firefox.
     * @return  {Boolean} True if current browser is Mozilla Firefox, false otherwise.
     */
    static isFirefox(range)
    {
        var match = Env.getUserAgent().match(/(?:firefox|fxios)\/(\d+)/);

        return match !== null && Env.compareVersion(match[1], range);
    }

    /**
     * isInternetExplorer
     * This function is used in order to know if current browser is Internet Explorer.
     * @return  {Boolean} True if current browser is Internet Explorer, false otherwise.
     */
    static isInternetExplorer(range)
    {
        var match = Env.getUserAgent().match(/(?:msie |trident.+?; rv:)(\d+)/);

        return match !== null && Env.compareVersion(match[1], range);
    }

    /**
     * isIOS
     * This function is used in order to know if current environment uses iOS.
     * @return  {Boolean} True if current environment uses iOS, false otherwise.
     */
    static isIOS()
    {
        return Env.isIphone() || Env.isIpad() || Env.isIpod();
    }

    /**
     * isIpad
     * This function is used in order to know if current device is an iPad.
     * @return  {Boolean} True if current device is an iPad, false otherwise.
     */
    static isIpad(range)
    {
        var match = Env.getUserAgent().match(/ipad.+?os (\d+)/);

        return match !== null && Env.compareVersion(match[1], range);
    }

    /**
     * isIphone
     * This function is used in order to know if current device is an iPhone.
     * @return  {Boolean} True if current device is an iPhone, false otherwise.
     */
    static isIphone(range)
    {
        // avoid false positive for Facebook in-app browser on ipad;
        // original iphone doesn't have the OS portion of the UA
        var match = Env.isIpad() ? null : Env.getUserAgent().match(/iphone(?:.+?os (\d+))?/);

        return match !== null && Env.compareVersion(match[1] || 1, range);
    }

    /**
     * isIpod
     * This function is used in order to know if current device is an iPod.
     * @return  {Boolean} True if current device is an iPod, false otherwise.
     */
    static isIpod(range)
    {
        var match = Env.getUserAgent().match(/ipod.+?os (\d+)/);

        return match !== null && Env.compareVersion(match[1], range);
    }

    /**
     * isLinux
     * This function is used in order to know if current environment uses Linux.
     * @return  {Boolean} True if current environment uses Linux, false otherwise.
     */
    static isLinux()
    {
        return /linux/.test(Env.getAppVersion());
    }

    /**
     * isMac
     * This function is used in order to know if current device is a mac.
     * @return  {Boolean} True if current device is a mac, false otherwise.
     */
    static isMac()
    {
        return /mac/.test(Env.getAppVersion());
    }

    /**
     * isMobile
     * This function is used in order to know if current environment is a mobile one.
     * @return  {Boolean} True if current environment is a mobile one, false otherwise.
     */
    static isMobile()
    {
        return Env.isIphone() || Env.isIpod() || Env.isAndroidPhone() || Env.isBlackberry() || Env.isWindowsPhone();
    }

    /**
     * isOffline
     * This function is used in order to know if current device is offline (ie has not internet access at the moment).
     * @return  {Boolean} True if current device is offline, false otherwise.
     */
    static isOffline()
    {
        return !Env.isOnline();
    }

    /**
     * isObline
     * This function is used in order to know if current device is online (ie has internet access at the moment).
     * @return  {Boolean} True if current device is online, false otherwise.
     */
    static isOnline()
    {
        let navigator = Env.getNavigator();

        return !navigator || navigator.onLine === true;
    }

    /**
     * isOpera
     * This function is used in order to know if current browser is Opera.
     * @return  {Boolean} True if current browser is Opera, false otherwise.
     */
    static isOpera()
    {
        var match = Env.getUserAgent().match(/(?:^opera.+?version|opr)\/(\d+)/);

        return match !== null && Env.compareVersion(match[1], range);
    }

    /**
     * isPhantom
     * This function is used in order to know if current browser is PhantomJS.
     * @return  {Boolean} True if current browser is PhantomJS, false otherwise.
     */
    static isPhantom(range)
    {
        var match = Env.getUserAgent().match(/phantomjs\/(\d+)/);

        return match !== null && compareVersion(match[1], range);
    }

    /**
     * isSafari
     * This function is used in order to know if current browser is Safari.
     * @return  {Boolean} True if current browser is Safari, false otherwise.
     */
    static isSafari(range)
    {
        var match = Env.getUserAgent().match(/version\/(\d+).+?safari/);

        return match !== null && Env.compareVersion(match[1], range);
    }

    /**
     * isTablet
     * This function is used in order to know if current environment is a tablet one.
     * @return  {Boolean} True if current environment is a tablet one, false otherwise.
     */
    static isTablet()
    {
        return Env.isIpad() || Env.isAndroidTablet() || Env.isWindowsTablet();
    }

    /**
     * isTouchDevice
     * This function is used in order to know if current device is a touch device.
     * @return  {Boolean} True if current device is a touch device, false otherwise.
     */
    static isTouchDevice()
    {
        let env = Env.getSelf(), d = Env.getDocument();

        return !!d && ('ontouchstart' in env || ('DocumentTouch' in env && d instanceof DocumentTouch));
    }

    /**
     * isWindows
     * This function is used in order to know if current environment uses Windows.
     * @return  {Boolean} True if current environment uses Windows, false otherwise.
     */
    static isWindows()
    {
        return /win/.test(Env.getAppVersion());
    }

    /**
     * isWindowsPhone
     * This function is used in order to know if current device is a Windows phone.
     * @return  {Boolean} True if current device is a Windows phone, false otherwise.
     */
    static isWindowsPhone()
    {
        return Env.isWindows() && /phone/.test(Env.getUserAgent());
    }

    /**
     * isWindowsTablet
     * This function is used in order to know if current device is a Windows tablet.
     * @return  {Boolean} True if current device is a Windows tablet, false otherwise.
     */
    static isWindowsTablet()
    {
        return Env.isWindows() && !Env.isWindowsPhone() && /touch/.test(Env.getUserAgent());
    }
};

module.exports = {
    Env: Env
};
