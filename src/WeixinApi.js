(function (window) {

    /**
     * 定义WeixinApi
     */
    var WeixinApi = {
        version: 1.0
    };

    window.WeixinApi = WeixinApi;

    if (typeof define === 'function' && (define.amd || define.cmd)) {
        if (define.amd) {
            // AMD 规范，for：requirejs
            define(function () {
                return WeixinApi;
            });
        } else if (define.cmd) {
            // CMD 规范，for：seajs
            define(function (require, exports, module) {
                module.exports = WeixinApi;
            });
        }
    }

    var _wx;

    /**
     * 初始化函数
     */
    WeixinApi.ready = function (wx) {
        _wx = wx;
    };

    /**
     * 判断当前客户端版本是否支持指定JS接口
     * apiList:需要检测的JS接口列表
     * callback:以键值对的形式返回，可用的api值true，不可用为false;如：{"checkResult":{"chooseImage":true},"errMsg":"checkJsApi:ok"}
     */
    WeixinApi.checkJsApi = function (apiList, callback) {
        if (null === _wx) {
            alert("微信接口对象不能为null");
            return;
        }

        _wx.checkJsApi({
            jsApiList: apiList, // 需要检测的JS接口列表，所有JS接口列表见附录2,
            success: function (res) {
                callback(res);
            }
        });
    };

    /**
     * 分享给微信好友
     * wxData: 待分享的信息
     * wxData.title        分享的标题
     * wxData.desc        描述
     * wxData.imgUrl    图片地址
     * wxData.link        链接地址
     * wxData.type        享类型,music、video或link，不填默认为link
     * wxData.dataUrl    如果type是music或video，则要提供数据链接，默认为空
     *
     * wxCallback:相关回调方法
     * wxCallback.success        分享成功的回调函数
     * wxCallback.cancel        取消分享的回调函数
     * wxCallback.fail            失败时执行的回调函数
     * wxCallback.complete        调用完成时执行的回调函数，无论成功或失败都会执行。
     * wxCallback.trigger        监听Menu中的按钮点击时触发的方法，该方法仅支持Menu中的相关接口。
     */
    WeixinApi.shareToFriend = function (wxData, wxCallback) {
        if (null === _wx) {
            alert("微信接口对象不能为null");
            return;
        }
        _wx.onMenuShareAppMessage({
            title: wxData.title, // 分享标题
            desc: wxData.desc, // 分享描述
            link: wxData.link, // 分享链接
            imgUrl: wxData.imgUrl, // 分享图标
            type: wxData.type || 'link', // 分享类型,music、video或link，不填默认为link
            dataUrl: wxData.dataUrl || '', // 如果type是music或video，则要提供数据链接，默认为空
            success: function () {
                // 用户确认分享后执行的回调函数
                wxCallback.success();
            },
            cancel: function () {
                // 用户取消分享后执行的回调函数
                wxCallback.cancel();
            },
            fail: function () {
                //接口调用失败时执行的回调函数
                wxCallback.fail();
            },
            complete: function () {
                // 接口调用完成时执行的回调函数，无论成功或失败都会执行。
                wxCallback.complete();
            },
            trigger: function () {
                //监听Menu中的按钮点击时触发的方法，该方法仅支持Menu中的相关接口。
                wxCallback.complete();
            }
        });

    };

    /**
     * 分享到微信朋友圈
     * wxData: 待分享的信息
     * wxData.title        分享的标题
     * wxData.desc        描述
     * wxData.imgUrl    图片地址
     * wxData.link        链接地址
     * wxData.type        享类型,music、video或link，不填默认为link
     * wxData.dataUrl    如果type是music或video，则要提供数据链接，默认为空
     *
     * wxCallback:相关回调方法
     * wxCallback.success        分享成功的回调函数
     * wxCallback.cancel        取消分享的回调函数
     * wxCallback.fail            失败时执行的回调函数
     * wxCallback.complete        调用完成时执行的回调函数，无论成功或失败都会执行。
     * wxCallback.trigger        监听Menu中的按钮点击时触发的方法，该方法仅支持Menu中的相关接口。
     */
    WeixinApi.shareToTimeline = function (wxData, wxCallback) {
        if (null === _wx) {
            alert("微信接口对象不能为null");
            return;
        }

        _wx.onMenuShareTimeline({
            title: wxData.desc, // 分享标题
            link: wxData.link, // 分享链接
            imgUrl: wxData.imgUrl, // 分享图标
            success: function () {
                // 用户确认分享后执行的回调函数
                wxCallback.success();
            },
            cancel: function () {
                // 用户取消分享后执行的回调函数
                wxCallback.cancel();
            },
            fail: function () {
                //接口调用失败时执行的回调函数
                wxCallback.fail();
            },
            complete: function () {
                // 接口调用完成时执行的回调函数，无论成功或失败都会执行。
                wxCallback.complete();
            },
            trigger: function () {
                //监听Menu中的按钮点击时触发的方法，该方法仅支持Menu中的相关接口。
                wxCallback.complete();
            }
        });
    };

    /**
     * 分享到腾讯微博
     * wxData: 待分享的信息
     * wxData.title        分享的标题
     * wxData.desc        描述
     * wxData.imgUrl    图片地址
     * wxData.link        链接地址
     * wxData.type        享类型,music、video或link，不填默认为link
     * wxData.dataUrl    如果type是music或video，则要提供数据链接，默认为空
     *
     * wxCallback:相关回调方法
     * wxCallback.success        分享成功的回调函数
     * wxCallback.cancel        取消分享的回调函数
     * wxCallback.fail            失败时执行的回调函数
     * wxCallback.complete        调用完成时执行的回调函数，无论成功或失败都会执行。
     * wxCallback.trigger        监听Menu中的按钮点击时触发的方法，该方法仅支持Menu中的相关接口。
     */
    WeixinApi.shareToWeibo = function (wxData, wxCallback) {
        if (null === _wx) {
            alert("微信接口对象不能为null");
            return;
        }

        _wx.onMenuShareWeibo({
            title: wxData.title, // 分享标题
            desc: wxData.desc, // 分享描述
            link: wxData.link, // 分享链接
            imgUrl: wxData.imgUrl, // 分享图标
            success: function () {
                // 用户确认分享后执行的回调函数
                wxCallback.success();
            },
            cancel: function () {
                // 用户取消分享后执行的回调函数
                wxCallback.cancel();
            },
            fail: function () {
                //接口调用失败时执行的回调函数
                wxCallback.fail();
            },
            complete: function () {
                // 接口调用完成时执行的回调函数，无论成功或失败都会执行。
                wxCallback.complete();
            },
            trigger: function () {
                //监听Menu中的按钮点击时触发的方法，该方法仅支持Menu中的相关接口。
                wxCallback.complete();
            }
        });
    };

    /**
     * 分享到QQ
     * wxData: 待分享的信息
     * wxData.title        分享的标题
     * wxData.desc        描述
     * wxData.imgUrl    图片地址
     * wxData.link        链接地址
     * wxData.type        享类型,music、video或link，不填默认为link
     * wxData.dataUrl    如果type是music或video，则要提供数据链接，默认为空
     *
     * wxCallback:相关回调方法
     * wxCallback.success        分享成功的回调函数
     * wxCallback.cancel        取消分享的回调函数
     * wxCallback.fail            失败时执行的回调函数
     * wxCallback.complete        调用完成时执行的回调函数，无论成功或失败都会执行。
     * wxCallback.trigger        监听Menu中的按钮点击时触发的方法，该方法仅支持Menu中的相关接口。
     */
    WeixinApi.shareToQQ = function (wxData, wxCallback) {
        if (null === _wx) {
            alert("微信接口对象不能为null");
            return;
        }

        _wx.onMenuShareQQ({
            title: wxData.title, // 分享标题
            desc: wxData.desc, // 分享描述
            link: wxData.link, // 分享链接
            imgUrl: wxData.imgUrl, // 分享图标
            success: function () {
                // 用户确认分享后执行的回调函数
                wxCallback.success();
            },
            cancel: function () {
                // 用户取消分享后执行的回调函数
                wxCallback.cancel();
            },
            fail: function () {
                //接口调用失败时执行的回调函数
                wxCallback.fail();
            },
            complete: function () {
                // 接口调用完成时执行的回调函数，无论成功或失败都会执行。
                wxCallback.complete();
            },
            trigger: function () {
                //监听Menu中的按钮点击时触发的方法，该方法仅支持Menu中的相关接口。
                wxCallback.complete();
            }
        });
    };

    /**
     * 隐藏右上角菜单接口
     */
    WeixinApi.hideOptionMenu = function () {
        if (null === _wx) {
            alert("微信接口对象不能为null");
            return;
        }
        _wx.hideOptionMenu();
    };

    /**
     * 显示右上角菜单接口
     */
    WeixinApi.showOptionMenu = function () {
        if (null === _wx) {
            alert("微信接口对象不能为null");
            return;
        }
        _wx.showOptionMenu();
    };

    /**
     * 关闭当前网页窗口接口
     */
    WeixinApi.closeWindow = function () {
        if (null === _wx) {
            alert("微信接口对象不能为null");
            return;
        }
        _wx.closeWindow();
    };

    /**
     * 批量隐藏功能按钮接口
     * menuItems 接口列表
     */
    WeixinApi.hideMenuItems = function (menuItems) {
        if (null === _wx) {
            alert("微信接口对象不能为null");
            return;
        }
        _wx.hideMenuItems({
            menuList: menuItems // 要隐藏的菜单项，所有menu项见附录3
        });
    };

    /**
     * 批量显示功能按钮接口
     * menuItems 接口列表
     */
    WeixinApi.showMenuItems = function (menuItems) {
        if (null === _wx) {
            alert("微信接口对象不能为null");
            return;
        }
        _wx.showMenuItems({
            menuList: menuItems // 要显示的菜单项，所有menu项见附录3
        });
    };

    /**
     * 隐藏所有非基础按钮接口
     */
    WeixinApi.hideAllNonBaseMenuItem = function () {
        if (null === _wx) {
            alert("微信接口对象不能为null");
            return;
        }
        _wx.hideAllNonBaseMenuItem();
    };

    /**
     * 显示所有功能按钮接口
     */
    WeixinApi.showAllNonBaseMenuItem = function () {
        if (null === _wx) {
            alert("微信接口对象不能为null");
            return;
        }
        _wx.showAllNonBaseMenuItem();
    };

    /**
     * 显示底部工具栏
     */
    WeixinApi.showToolbar = function () {
        WeixinJSBridge.call('showToolbar');
    };

    /**
     * 隐藏底部工具栏
     */
    WeixinApi.hideToolbar = function () {
        WeixinJSBridge.call('hideToolbar');
    };

    /**
     * networkType; // 返回网络类型2g，3g，4g，wifi
     */
    WeixinApi.getNetworkType = function (callback) {
        if (null === _wx) {
            alert("微信接口对象不能为null");
            return;
        }

        _wx.getNetworkType({
            success: function (res) {
                callback(res.networkType);
            }
        });
    };

    /**
     * 拍照或从手机相册中选图接口
     * callback([]):选择图片后的回调函数,返回选择的本地ID列表
     *
     */
    WeixinApi.chooseImage = function (callback) {
        if (null === _wx) {
            alert("微信接口对象不能为null");
            return;
        }

        _wx.chooseImage({
            success: function (res) {
                var localIds = res.localIds; // 返回选定照片的本地ID列表，localId可以作为img标签的src属性显示图片
                callback(localIds);
            }
        });
    };

    /**
     * 上传图片接口
     * localId:String 需要上传的图片的本地ID，由chooseImage接口获得
     * isShowProgressTips:int 显示进度提示(0-不显示，1-显示)，默认值为1
     *
     * callback(String):上传成功的服务器端图片id，通过该id调用downloadImage接口下载图片
     */
    WeixinApi.uploadImage = function (localId, isShowProgressTips, callback) {
        if (null === _wx) {
            alert("微信接口对象不能为null");
            return;
        }
        _wx.uploadImage({
            localId: localId, // 需要上传的图片的本地ID，由chooseImage接口获得
            isShowProgressTips: isShowProgressTips || 1, // 默认为1，显示进度提示
            success: function (res) {
                var serverId = res.serverId; // 返回图片的服务器端ID
                callback(serverId);
            }
        });
    };

    /**
     * 下载图片接口
     * serverId:String    需要下载的图片的服务器端ID，由uploadImage接口获得
     * isShowProgressTips:int 显示进度提示(0-不显示，1-显示)，默认值为1
     *
     * callback(String):返回图片下载后的本地ID
     */
    WeixinApi.downloadImage = function (serverId, isShowProgressTips, callback) {
        if (null === _wx) {
            alert("微信接口对象不能为null");
            return;
        }
        _wx.downloadImage({
            serverId: serverId, // 需要下载的图片的服务器端ID，由uploadImage接口获得
            isShowProgressTips: isShowProgressTips || 1, // 默认为1，显示进度提示
            success: function (res) {
                var localId = res.localId; // 返回图片下载后的本地ID
                callback(localId);
            }
        });
    };

    /**
     * 预览图片接口
     * curSrc:当前显示图片的链接
     * srcList：需要预览的图片链接列表
     */
    WeixinApi.previewImage = function (curSrc, srcList) {
        if (null === _wx) {
            alert("微信接口对象不能为null");
            return;
        }
        _wx.previewImage({
            current: curSrc, // 当前显示的图片链接
            urls: srcList // 需要预览的图片链接列表
        });
    };

    /**
     * 判断当前网页是否在微信内置浏览器中打开
     */
    WeixinApi.openInWeixin = function () {
        return /MicroMessenger/i.test(navigator.userAgent);
    };

    /**
     * 调起微信扫一扫接口
     * @param callback
     */
    WeixinApi.scanQRCode = function (callback) {
        if (null === _wx) {
            alert("微信接口对象不能为null");
            return;
        }
        _wx.scanQRCode({
            needResult: 0, // 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
            scanType: ["qrCode", "barCode"], // 可以指定扫二维码还是一维码，默认二者都有
            success: function (res) {
                callback(res);
            }
        });
    };
})(window);