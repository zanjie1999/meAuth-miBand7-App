
try {
  (() => {

    var __$$app$$__ = __$$hmAppManager$$__.currentApp;

    function noTreeShaking() {}

    function getApp() {
      return __$$app$$__.app;
    }

    function getCurrentPage() {
      return __$$app$$__.current && __$$app$$__.current.module;
    }

    /*
  * ZeppOS bundle tool v2.4.0
  * Copyright © Zepp. All Rights Reserved
  */
    'use strict';

    const languageTable = {};

    getApp() ? DeviceRuntimeCore.HmUtils.gettextFactory(languageTable, getApp().__globals__.lang, 'zh-CN') : console.log(languageTable);

    try {
      (() => {
        var e = __$$hmAppManager$$__.currentApp;
        const o = DeviceRuntimeCore.HmLogger.getLogger('hello-world-app');
        e.app = DeviceRuntimeCore.App({
          globalData: {},
          onCreate() {
            o.debug('app onCreate invoked');
          },
          onDestroy() {
            o.debug('app onDestroy invoked');
          }
        }), e.app.__globals__ = {
          lang: new DeviceRuntimeCore.HmUtils.Lang(DeviceRuntimeCore.HmUtils.getLanguage()),
          px: DeviceRuntimeCore.HmUtils.getPx(490)
        };
      })();
    } catch (e) {
      console.log(e);
    }
    /*
    * end js
    */

    ;
    getApp().__globals__ = {
      lang: new DeviceRuntimeCore.HmUtils.Lang(DeviceRuntimeCore.HmUtils.getLanguage()),
      px: DeviceRuntimeCore.HmUtils.getPx(490)
    }
    getApp().__globals__.gettext = getApp() ? DeviceRuntimeCore.HmUtils.gettextFactory(languageTable, getApp().__globals__.lang, 'zh-CN') : console.log(languageTable)

  })()
} catch(e) {
  console.log(e)
  /* todo */
}