$(document).ready(function () {



    var isMuted = false;
    
    
    
        (function () {
    
    
    
      var navigated = false;
    
      var docTitle = document.title;
    
    
    
    window.addEventListener('visibilitychange', function () {
    
      var pageVis = document.visibilityState;
    
      // document.title = pageVis;
    
      if ((isMuted === false) && (pageVis === "visible") && ($('.instructionsOverlay')[0].style.display == "none") && (navigated === false)) {
    
      ion.sound.play("bg");}
    
    else
    
    { ion.sound.pause("bg");}
    
    });
    
    
    
    (function(history){
    
       var navigated = false;
    
       var pushState = history.pushState;
    
       history.pushState = function(state) {
    
      ion.sound.destroy();
    
      navigated = true;
    
      return pushState.apply(history, arguments);
    
    };
    
    })(window.history);
    
    
    
    window.addEventListener('hashchange', function (event) {
    
    ion.sound.destroy();
    
    navigated = true;
    
    });
    
    
    
    
    
    
    
            if (!document.getElementsByClassName) {
    
                var indexOf = [].indexOf || function (prop) {
    
                    for (var i = 0; i < this.length; i++) {
    
                        if (this[i] === prop) return i;
    
                    }
    
                    return -1;
    
                };
    
                getElementsByClassName = function (className, context) {
    
                    var elems = document.querySelectorAll ? context.querySelectorAll("." + className) : (function () {
    
                        var all = context.getElementsByTagName("*"),
    
                            elements = [],
    
                            i = 0;
    
                        for (; i < all.length; i++) {
    
                            if (all[i].className && (" " + all[i].className + " ").indexOf(" " + className + " ") > -1 && indexOf.call(elements, all[i]) === -1) elements.push(all[i]);
    
                        }
    
                        return elements;
    
                    })();
    
                    return elems;
    
                };
    
                document.getElementsByClassName = function (className) {
    
                    return getElementsByClassName(className, document);
    
                };
    
    
    
                if (Element) {
    
                    Element.prototype.getElementsByClassName = function (className) {
    
                        return getElementsByClassName(className, this);
    
                    };
    
                }
    
    
    
    
    
            }
    
        })();
    
    });
    
    
    
    var JqueryLoader = function () {
    
        this.ready = function (n) {
    
            if ("function" == typeof n) if (document.addEventListener) document.addEventListener("DOMContentLoaded", n, !1); else if (window.attachEvent) window.attachEvent("onload", n); else if ("function" == typeof window.onload) {
    
                var o = window.onload;
    
                window.onload = function () {
    
                    o(), n()
    
                }
    
            } else window.onload = n
    
        }
    
    };
    
    
    
    function buildClick(params) {
    
        if (params.gameProperties) {
    
    
    
            var api = 'http://deeplink.888casino.com/demo/' + params.gameProperties + '/?return=2';
    
            var returnVar = "jsonp";
    
            var mailCB = $.ajax({
    
                url: api,
    
                jsonpCallback: returnVar,
    
                dataType: "jsonp",
    
                method: 'post',
    
                success: function (response) {
    
                    var btnParams = (typeof response.data != "undefined" && typeof response.data.smart_button_params != "undefined") ? response.data.smart_button_params : '';
    
                    _commonjs888.push({
    
                        'function': 'SmartButton.setButton',
    
                        'values': [decodeEntities(params.mainCtaText), params.mainBrands,
    
                            btnParams, params.mainDlNumber,
    
                        params.mainOpening, '',
    
                        params.mainOpenCash, params.mainPromo]
    
                    });
    
    
    
                }, error: function (data) {
    
                }, complete: function () {
    
                }
    
            });
    
    
    
        } else {
    
            _commonjs888.push({
    
                'function': 'SmartButton.setButton',
    
                'values': [decodeEntities(params.mainCtaText), params.mainBrands,
    
                    '', params.mainDlNumber,
    
                params.mainOpening, '',
    
                params.mainOpenCash, params.mainPromo]
    
            });
    
        }
    
    
    
    }
    
    
    
    
    
    function localJsonpCallback(json) {
    
        if (!json.Error) {
    
            //console.log('err');
    
        }
    
        else {
    
            //console.log(json.Message);
    
        }
    
    }
    
    
    
    
    
    // Set the variable to yes/no if you want to disable\enable promocode + client links and buttons -> add the class: "disableOption" to the element you want to disable
    
    disableLinksAndButtons = "yes";
    
    
    
    
    
    
    
    // Globals
    
    // var initialCampaignID = "$$SessionItem(campaignID)$$"
    
    // var username = "$$SessionItem(username)$$" || "$$SessionItem(usernameNative)$$"
    
    // var usernameNative = "$$SessionItem(usernameNative)$$"
    
    // var firstname = "$$SessionItem(firstname)$$" || "$$SessionItem(firstnameNative)$$",
    
    // var lastname = "$$SessionItem(lastname)$$"
    
    // var guid = "$$SessionItem(guid)$$"
    
    var randomChosenPackage = "$$SessionItem(RandomChosenPackage)$$"
    
    var randomChosenPackageNative = "$$SessionItem(RandomChosenPackageNative)$$"
    
    // var campaignID = "$$SessionItem(campaignID)$$"
    
    var promocode = "$$SessionItem(promocode)$$" || "$$SessionItem(promocodeNative)$$"
    
    // var currency = "$$SessionItem(currency)$$" || "$$SessionItem(currencyNative)$$"
    
    
    
    var msgDisplay = false
    
    var claimStatus = ""
    
    var guid = "$$SessionItem(guid)$$"
    
    var username = "$$SessionItem(username)$$" || "$$SessionItem(usernameNative)$$"
    
    var usernameNative = "$$SessionItem(usernameNative)$$"
    
    var win = 0
    
    
    
    document.querySelector(".promocode").innerHTML = promocode;
    
    
    
    function RoBgameOver(msg, bgImg) {
    
        // blackBtnFlag = 1;
    
        // redBtnFlag = 1;
    
        // $('.blackButton').attr('src', $$TreatBtn$$);
    
        // $('.redButton').attr('src', $$TrickBtn$$);
    
        /* $('.blackButton').removeClass('blackButtonHover');
    
         $('.redButton').removeClass('redButtonHover');*/
    
    
    
        // if (!gameMute && $('.congratsPopupHalloween').css('display') == 'none' && msgDisplay === false) {
    
        //     try {
    
        //         ion.sound.play("success");
    
        //     } catch (e) {
    
    
    
        //     }
    
        // }
    
    
    
        gameOver = true;
    
    
    
    
    
        // setTimeout(function () {
    
        //     setPopupHeight()
    
        // }, 300)
    
    
    
        document.querySelector('.congratsPopupHalloween').style.display = "flex";
    
        document.querySelector('.congratsPopupWrapperHalloween').style.backgroundImage = "url(" + bgImg + ")";
    
    
    
    
    
    
    
        if (msg != '') {
    
            document.querySelector(".congratsPopupHalloween .content").innerHTML = msg;
    
        }
    
    
    
        // if (textDetails != '') {
    
        //     document.querySelector(".congratsPopupHalloween #prizeDetails").innerHTML = textDetails;
    
        // }
    
    
    
        //jQuery(".congratsPopupWrapperHalloween h4").fitText(1.71);
    
        //jQuery(".congratsPopupWrapperHalloween h5").fitText(1.71);
    
        //jQuery(".congratsPopupWrapperHalloween #popupBody").fitText(1.2);
    
        //jQuery(".congratsPopupWrapperHalloween #popupBody h2").fitText(2);
    
        //jQuery(".congratsPopupWrapperHalloween #popupBody h3").fitText(2);
    
        //jQuery(".congratsPopupWrapperHalloween #prizeDetails").fitText(3.6);
    
    
    
        // $('.congratsPopup').show("fast", function () {
    
    
    
        // });
    
    }
    
    
    
    // function setPopupHeight() {
    
    //     var popupEl = document.querySelector('.popupContent');
    
    //     var popupImg = document.querySelector('.popupBg').getBoundingClientRect();
    
    
    
    //     popupEl.style.height = popupImg.height + "px";
    
    // }
    
    
    
    
    
    function claim(conditionalValue) {
    
        // Detecting brand
    
        var brandUrl = window.location.origin,
    
            claimUrl = brandUrl + "/claim/random/?guid=" + guid;
    
    
    
        var ajaxValue = "";
    
    
    
        if (conditionalValue == "reset") {
    
            claimStatus = "";
    
        } else {
    
            if (claimStatus == "") {
    
                claimStatus = "waiting";
    
    
    
                setTimeout(function () {
    
                    $.ajax({
    
                        type: "POST",
    
                        url: claimUrl,
    
                        success: function (result) {
    
                            ajaxValue = $(result)
    
                                .find("#fullContent > div")
    
                                .text();
    
                            ajaxValue = ajaxValue.replace(/\D/g, "");
    
                            claimStatus = ajaxValue;
    
                        },
    
                        error: function (result) {
    
                            claimStatus = "error";
    
                        },
    
                        complete: function () { }
    
                    });
    
                }, 3000)
    
            }
    
        }
    
    
    
        return claimStatus;
    
    }
    
    
    
    function serverHandling() {
    
        // Preventing the CampaignID from being empty for the log records
    
        if (campaignID == "") {
    
            campaignID = initialCampaignID;
    
        }
    
    
    
        // Check if all the parameters are exist
    
        if (username == "" || randomChosenPackage == "" || guid == "" || win == "") {
    
            //console.log("no params !!!!!!!");
    
    
    
            lockFallback = true;
    
            apiResponse = true; // No parameters - API is not relevant
    
            logger(campaignID, guid, username, "Data is missing " + userDevice);
    
            dataType("Error");
    
        } 
    
    
    
        // Fallback mechanism - if there is no answer from the API within X seconds, and letting the user to play
    
        setTimeout(function () {
    
            if (lockFallback == false) {
    
                lockApi = true;
    
                logger(campaignID, guid, username, "Fallback " + userDevice);
    
                userCanPlay = false;
    
                gameStatus = "Fallback Mechanism";
    
                displayGame();
    
            }
    
        }, 5000);
    
    }
    
    
    
    // Checking if the user can play
    
    
    
    
    
    
    
    /** Game **/
    
    
    
    function getParameterByName(name) {
    
        name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    
        var regexS = "[\\?&]" + name + "=([^&#]*)";
    
        var regex = new RegExp(regexS);
    
        var results = regex.exec(window.location.href);
    
        if (results == null)
    
            return "";
    
        else
    
            return decodeURIComponent(results[1].replace(/\+/g, " "));
    
    }
    
    
    
    // 'use strict';
    
    function shootoutGambit(elm, opts) {
    
    
    
        opts = $.extend({
    
            debugMode: null,
    
            timer: true,
    
            timerSeconds: 100000,
    
            timerGameOver: true,
    
    
    
            //get randomChosenPackage value from link  
    
            packageId: randomChosenPackage || randomChosenPackageNative,
    
    
    
            randomChosenPackages: {
    
                1: {
    
                    id: 1,
    
                    totalPrize: 10,
    
                    positions: [
    
                        100,
    
                        10,
    
                        50,
    
                        15,
    
                        25,
    
                        12,
    
            ],
    
                    throws: [0, 10]
    
                },
    
                2: {
    
                    id: 2,
    
                    totalPrize: 12,
    
                    positions: [
    
                        50,
    
                        100,
    
                        10,
    
                        12,
    
                        25,
    
                        15,
    
            ],
    
                    throws: [12, 0]
    
                },
    
                3: {
    
                    id: 3,
    
                    totalPrize: 15,
    
                    positions: [
    
                        50,
    
                        12,
    
                        100,
    
                        10,
    
                        15,
    
                        25,
    
            ],
    
                    throws: [0, 15]
    
                },
    
                4: {
    
                    id: 4,
    
                    totalPrize: 22,
    
                    positions: [
    
                        12,
    
                        25,
    
                        15,
    
                        100,
    
                        10,
    
                        50,
    
            ],
    
                    throws: [10, 12]
    
                },
    
                5: {
    
                    id: 5,
    
                    totalPrize: 25,
    
                    positions: [
    
                        15,
    
                        50,
    
                        12,
    
                        25,
    
                        100,
    
                        10,
    
            ],
    
                    throws: [25, 0]
    
                },
    
                6: {
    
                    id: 6,
    
                    totalPrize: 27,
    
                    positions: [
    
                        15,
    
                        25,
    
                        12,
    
                        50,
    
                        10,
    
                        100,
    
            ],
    
                    throws: [12, 15]
    
                },
    
                7: {
    
                    id: 7,
    
                    totalPrize: 37,
    
                    positions: [
    
                        50,
    
                        12,
    
                        25,
    
                        10,
    
                        100,
    
                        15,
    
            ],
    
                    throws: [25, 12]
    
                },
    
                8: {
    
                    id: 8,
    
                    totalPrize: 50,
    
                    positions: [
    
                        12,
    
                        15,
    
                        10,
    
                        100,
    
                        25,
    
                        50,
    
            ],
    
                    throws: [50, 0]
    
                },
    
                9: {
    
                    id: 9,
    
                    totalPrize: 75,
    
                    positions: [
    
                        12,
    
                        10,
    
                        100,
    
                        15,
    
                        50,
    
                        25,
    
            ],
    
                    throws: [50, 25]
    
                },
    
                10: {
    
                    id: 10,
    
                    totalPrize: 100,
    
                    positions: [
    
                        10,
    
                        100,
    
                        15,
    
                        50,
    
                        25,
    
                        12,
    
            ],
    
                    throws: [0, 100]
    
                }
    
            },
    
    
    
            prizesArray: [],
    
            popupPrizesText: {},
    
            uniqueInfo: {},
    
            sounds: {
    
                path: '',
    
                background: '',
    
            },
    
    
    
            numOfTargets: 0,
    
            numOfGridColumns: 4,
    
            numOfGridRows: 4,
    
    
    
        }, opts);
    
    
    
        this.elm = elm;
    
        this.root = $(elm);
    
        this.rootHeader = this.root.parent();
    
        this.claimId = null;
    
        this.skinId = null;
    
        this.gameId = null;
    
        this.requestUrl = null;
    
        this.debugMode = opts.debugMode;
    
        this.mute = false;
    
        this.timing = opts.timing;
    
        this.gameTimerInterval = null;
    
        this.timer = opts.timer;
    
        this.timerSeconds = opts.timerSeconds;
    
        this.timerGameOver = opts.timerGameOver; // true - Show Game Over text, false - Show end time (00:00)
    
        this.isTimerPaused = false;
    
        this.isGameOver = false;
    
    
    
        // this.rndPrizesArray = opts.rndPrizesArray;
    
        this.prizesWonArray = null;
    
        this.uniqueInfo = opts.uniqueInfo;
    
        this.popupPrizesText = opts.popupPrizesText;
    
        this.bolRoundPrizes = opts.bolRoundPrizes;
    
        this.numOfGridColumns = opts.numOfGridColumns;
    
        this.numOfGridRows = opts.numOfGridRows;
    
        this.numOfTargets = opts.numOfTargets;
    
        this.gridElementsPositions = opts.gridElementsPositions;
    
        this.arrowsAnimationInterval = null;
    
        this.gridTargetPositionsArray = null;
    
    
    
        //newly added
    
        this.randomChosenPackages = opts.randomChosenPackages
    
        this.packageId = opts.packageId
    
        this.gridMissPositionsArray = null;
    
        this.totalPrizesAmount = 0;
    
        this.currentThrow = 0
    
        this.throws = [];
    
    
    
        this.init();
    
    }
    
    
    
    shootoutGambit.prototype = {
    
        init: function () {
    
            var _this = this,
    
                gameBoardGrid = this.root.find('.gameBoardGrid'),
    
                $livesWrapper = this.root.find('.livesWrapper');
    
    
    
            //FitText
    
            // this.rootHeader.parent().find('.debugWrapper h2').fitText(2.6);
    
            // this.rootHeader.parent().find('.debugWrapper .debugOption').fitText(1.5);
    
    
    
            this.buildGame();
    
    
    
    
    
            //FitText
    
            this.root.find('.cardWrapper .back').fitText(0.85);
    
            this.rootHeader.find('.gameTimer').fitText(1.1);
    
            this.rootHeader.find('.headerText').fitText(2.3);
    
    
    
            $livesWrapper.find('h4').fitText(0.25);
    
            $livesWrapper.find('ul li:nth-child(2)').fitText(0.01);
    
            $livesWrapper.find('ul li:last-child').fitText(0.01);
    
    
    
            //$livesWrapper.find('h4').fitText(0.4);
    
            //$livesWrapper.find('ul li:nth-child(2)').fitText(0.08);
    
            //$livesWrapper.find('ul li:last-child').fitText(0.13);
    
    
    
            this.root.find('.gameControls .TcsApply').fitText(0.6);
    
            gameBoardGrid.find('.gridElm p').fitText(1.1);
    
    
    
            this.getPrizes();
    
    
    
            //overlay element
    
    
    
            if (typeof window.initOverlay === "undefined") {
    
                window.initOverlay = "init"
    
                this.rootHeader.find('.gameBoardingBg_click, .gameBoardingBg, .gameBoardingMobileBg, .instructionsOverlay').click(function () {
    
                $(this).unbind('click');
    
                _this.rootHeader.find('.gameBoardingBg_click').fadeOut('fast');
    
    
    
                if (typeof window.initSoundOverlay === "undefined") {
    
                    window.initSoundOverlay  = "init"
    
                    if (_this.mute == false) {
    
                        try {
    
                            ion.sound.play("bg");
    
                        } catch (e) {
    
            
    
                        }
    
                    }
    
                    //console.log("mute in overlay inainte dupa click -->", _this.mute)
    
                }
    
    
    
                $("body").css("background", "none");
    
                // $(".TcsApplyAddOn a").hide();
    
                // $(".gameWrapper .TcsApply").show();
    
    
    
                var $playBtn = _this.root.find('.playBtn'),
    
                    $headerText = _this.rootHeader.find('.headerText');
    
    
    
                _this.rootHeader.find('.gameBoardingBg, .gameBoardingMobileBg').each(function (i, el) {
    
                    $(el).fadeOut(function () {
    
                        setTimeout(function () {
    
                            //$('body').css('background-color', '#8cd2f4');
    
                        }, 0);
    
                    }).hide();
    
                });
    
    
    
                $(this).hide();
    
                //$playBtn.attr('src', $playBtn.attr('data-disabled'));
    
                //$headerText.addClass('headerTextDisabled');
    
    
    
                // _this.getPrizes();
    
    
    
                overlayClick = true;
    
    
    
    
    
            });
    
        }
    
    },
    
    
    
        buildGame: function () {
    
            var _this = this
    
            // $tcsApplyLink = this.root.find('a.TcsApply'),
    
            // tcsApplyLink = null;
    
            this.gameid = getParameterByName('gameid');
    
            // tcsApplyLink = this.getGameUniqueInfo().TcsApplyUrl;
    
    
    
            this.createGridBoard();
    
            //this.fillOverBoardingGridPrizes();
    
    
    
            setTimeout(function () {
    
                var gameBoardGrid = $(".gameBoardGrid");
    
                var livesWrapper = $('.livesWrapper');
    
                var headerText = $(".headerText");
    
                var gameControls = $(".gameControls");
    
    
    
    
    
                if (gameBoardGrid !== false) {
    
                    _this.gameResize();
    
    
    
                    //FitText
    
                    _this.rootHeader.find('.headerText').fitText(2.3);
    
                    livesWrapper.find('h4').fitText(1.07);
    
                    livesWrapper.find('ul li:nth-child(2)').fitText(0.08);
    
                    livesWrapper.find('ul li:last-child').fitText(0.16);
    
                    _this.root.find('.gameControls .TcsApply').fitText(0.6);
    
                    gameBoardGrid.find('.gridElm p').fitText(1.1);
    
    
    
                }
    
                //console.log('setTimeout a rulat')
    
            }, 500);
    
    
    
            this.gameResize();
    
    
    
            //$('body').css('background-color', '#8cd2f4');
    
    
    
            this.root.find('ul li:last-child').html(this.getGameUniqueInfo().numOfKicks);
    
    
    
            $(window).resize(function () {
    
                _this.gameResize();
    
            });
    
    
    
            // T&C's Apply link
    
            // if(tcsApplyLink !== null) {
    
            //     $tcsApplyLink.attr('href', tcsApplyLink);
    
            //     $(".TcsApplyAddOn a").attr('href', tcsApplyLink);
    
            // }
    
            // $tcsApplyLink.hide();
    
    
    
            this.rootHeader.find('.gameClose').click(function () {
    
                /*window.close();*/
    
                //_this.showPopup('exit');
    
            });
    
    
    
    
    
            if (typeof window.initSound === "undefined") {
    
                window.initSound = "init"
    
            
    
                this.rootHeader.find('.gameMute').click(function () {
    
                
    
                    try {
    
                        if (_this.mute == false) {
    
                            //console.log("aici ar trebui sa fie FALSE mute in if-->",_this.mute);
    
                            $(this).attr('src', $(this).attr('data-off'));
    
                            ion.sound.stop('bg');
    
                         isMuted = true;
    
                            _this.mute = true;
    
                        } else {
    
                            //console.log("mute in else ar trebui sa se transforme in TRUE -->",_this.mute);
    
                            $(this).attr('src', $(this).attr('data-on'));
    
                            ion.sound.play('bg');
    
                            isMuted = false;
    
                            _this.mute = false;
    
    
    
                            }
    
                    } catch (e) {}
    
        
    
                    //console.log("mute la final -->", _this.mute)
    
                });
    
            }
    
    
    
        },
    
    
    
        createGridBoard: function () {
    
            var gameBoardGrid = this.root.find('.gameBoardGrid'),
    
                templates = {
    
                    target: '<div class="gridElm gridElm%%i%%">\n' +
    
                        '                    <img src=$$target$$ class="targetImg" data-arrow="%%arrow%%"/>\n' +
    
                        '                    <p></p>\n' + '</div>',
    
                    miss: '<div class="gridElm gridElm%%i%%">\n' +
    
                        '                    <img src=$$missTransparent$$ class="targetImg missImg" data-arrow="%%arrow%%"/>\n' +
    
                        '                </div>',
    
                    empty: '<div class="gridElm">&nbsp;</div>',
    
                },
    
                temp_template = '',
    
                totalGridElements = this.numOfGridColumns * this.numOfGridRows,
    
                currColInfo = null,
    
                currRow = 1,
    
                currCol = 1;
    
    
    
            this.gridTargetPositionsArray = [],
    
                this.gridMissPositionsArray = [];
    
    
    
            for (var i = 0; i < totalGridElements; i++) {
    
                try {
    
                    currColInfo = this.gridElementsPositions['row' + currRow]['col' + currCol];
    
                    if (currColInfo === undefined) {
    
                        temp_template += templates['empty'];
    
                    } else {
    
                        temp_template += templates[currColInfo['template']].replace('%%i%%', i).replace('%%arrow%%', currColInfo['arrow']);
    
    
    
                        if (currColInfo['template'] == 'target') {
    
                            this.gridTargetPositionsArray.push(i);
    
                        } else {
    
                            this.gridMissPositionsArray.push(i);
    
                        }
    
    
    
                    }
    
                } catch (e) {
    
    
    
                }
    
    
    
                if (currCol % this.numOfGridColumns === 0) {
    
                    currCol = 0;
    
                    currRow++;
    
                }
    
                currCol++;
    
            }
    
    
    
            //console.log("gridTargetPositions -->", this.gridTargetPositionsArray);
    
    
    
            gameBoardGrid.css('grid-template-columns', 'repeat(6, 1fr)').html(temp_template);
    
        },
    
    
    
        fillGridBoardPrizes: function () {
    
            var _this = this,
    
                prizeContentTemplate = '<strong>%%Amount%%%</strong>',
    
                fillPrizeArray = [],
    
                tempMissArrayLocationNumber = 0,
    
                tempScoreArrayLocationNumber = 0,
    
                totalScoreTargetsRemainToFill = 0;
    
    
    
            for (var p = 0; p < this.prizesWonArray.length; p++) {
    
                var currPrize = this.prizesWonArray[p];
    
    
    
                if (parseInt(currPrize[0]) === 0) {
    
                    currPrize[2] = this.gridMissPositionsArray[tempMissArrayLocationNumber];
    
                    tempMissArrayLocationNumber++;
    
                } else {
    
                    this.root.find('.gameBoardGrid .gridElm' + this.gridTargetPositionsArray[tempScoreArrayLocationNumber]).addClass('selectedPrize').attr('data-prize', currPrize[0] + ' ' + currPrize[1]).children('p').html(
    
                        prizeContentTemplate.replace('%%Amount%%', currPrize[0]).replace('%%Name%%', currPrize[1].replace(' ', '<br/>'))
    
                    );
    
                    currPrize[2] = this.gridTargetPositionsArray[tempScoreArrayLocationNumber];
    
    
    
                    tempScoreArrayLocationNumber++;
    
                }
    
            }
    
    
    
    
    
            for (var p = 0; p < totalScoreTargetsRemainToFill; p++) {
    
                if (p === totalScoreTargetsRemainToFill - 1) {
    
                    fillPrizeArray = this.getGameUniqueInfo().prizesArray[this.rndNumber(this.getGameUniqueInfo().prizesArray.length - parseInt(this.getGameUniqueInfo().prizesArray.length * 35 / 100), this.getGameUniqueInfo().prizesArray.length - 1)];
    
                    if (this.debugMode) { console.log('high - ' + p + ' - ' + fillPrizeArray); }
    
                } else {
    
                    fillPrizeArray = this.getGameUniqueInfo().prizesArray[this.rndNumber(0, parseInt(this.getGameUniqueInfo().prizesArray.length * 35 / 100))];
    
                    if (this.debugMode) { console.log('low - ' + p + ' - ' + fillPrizeArray); }
    
                }
    
    
    
                this.root.find('.gameBoardGrid .gridElm' + this.gridTargetPositionsArray[tempScoreArrayLocationNumber]).children('p').html(
    
                    prizeContentTemplate.replace('%%Amount%%', fillPrizeArray[0]).replace('%%Name%%', fillPrizeArray[1].replace(' ', '<br/>'))
    
                );
    
                tempScoreArrayLocationNumber++;
    
            }
    
    
    
        },
    
    
    
    
    
        gameResize: function () {
    
            var _this = this,
    
                $gameBoard = this.root.children('.gameBoard'),
    
                $gameHeader = this.rootHeader.children('.gameHeader'),
    
                $gameHeaderBg = $gameHeader.children('.gameHeaderBg'),
    
                $gameHeaderBgWrapper = $gameHeader.children('.gameHeaderBgWrapper'),
    
                $gameBg = this.rootHeader.children('.gameBg'),
    
                $gameMobileBg = this.rootHeader.children('.gameMobileBg'),
    
                //$gameBoardingBg_click = this.rootHeader.children('.gameBoardingBg_click'),
    
                $gameLogo = this.rootHeader.find('.brandLogo'),
    
                $gameClose = this.rootHeader.find('.gameClose'),
    
                $gameMute = this.rootHeader.find('.gameMute'),
    
                $belowShootingElm = this.root.find('.belowShootingElm'),
    
                $shootingElm = this.root.find('.shootingElm'),
    
                $shootingArrows = this.root.find('.shootingArrows img'),
    
                $playBtn = this.root.find('.playBtn'),
    
                $livesWrapper = this.root.find('.livesWrapper'),
    
                $splashScreenContent = this.rootHeader.find('.splashScreen .splashContent'),
    
                isMobile = !$gameBg.is(':visible'),
    
                getWidthPercent = function (percent) {
    
                    return ($gameBg.width() * percent / 100) * ((isMobile) ? 2.5 : 1);
    
                };
    
    
    
            $gridElm = this.root.children('.gridElm'),
    
                $gridElm.is(':visible'),
    
    
    
    
    
                //Game Wrapper
    
                this.root.css({
    
                    width: getWidthPercent(39.6) + 'px',
    
                    height: getWidthPercent(39.6) + 'px',
    
                });
    
    
    
            // Over Boarding
    
            // $gameBoardingBg_click.css({
    
            //     width: getWidthPercent(18)+'px',
    
            // });
    
    
    
            // Gameboard
    
            $gameBoard.css({
    
                width: getWidthPercent(36.5) + 'px',
    
                height: getWidthPercent(26) + 'px'
    
            });
    
    
    
            // Game Header
    
            $gameHeader.css({
    
                width: getWidthPercent(39.6) + 'px',
    
            });
    
    
    
            $gameHeaderBg.css({
    
                width: this.root.width() + 'px',
    
            });
    
            $gameHeaderBgWrapper.css({
    
                width: ($gameHeader.width() * 75 / 100) + 'px',
    
                height: $gameHeaderBg.height()
    
            });
    
            $gameLogo.css({
    
                width: ($gameBg.width() / ((isMobile) ? 6 : 15)) + 'px',
    
            });
    
    
    
            $gameClose.css({
    
                width: (($gameBg.width() / 10) / ((isMobile) ? 1 : 3)) + 'px',
    
            });
    
    
    
            $gameMute.css({
    
                width: (($gameBg.width() / 10) / ((isMobile) ? 1 : 3)) + 'px',
    
            });
    
    
    
    
    
            // Game Controls
    
            $belowShootingElm.css({
    
                width: getWidthPercent(15.9) + 'px',
    
            });
    
            $shootingElm.css({
    
                width: getWidthPercent(5.58) + 'px',
    
            });
    
            $shootingArrows.css({
    
                width: getWidthPercent(9.06) + 'px',
    
            });
    
            // $playBtn.css({
    
            //     width: getWidthPercent(17) + 'px',
    
            // });
    
            $livesWrapper.css({
    
                width: getWidthPercent(15) + 'px',
    
            });
    
    
    
            // Splash Screen Content
    
            $splashScreenContent.css({
    
                width: getWidthPercent(((isMobile) ? 35.58 : 39.58)) + 'px',
    
                height: this.root.height() + 'px',
    
                top: $gameHeader.height(),
    
            });
    
        },
    
    
    
        shootingElmAction: function () {
    
    
    
            if (claim() != '1') {
    
                return;
    
            }
    
    
    
            throwsTimes++;
    
    
    
            if (throwsTimes > 1) {
    
                userClicked = true;
    
            }
    
    
    
            if (this.isGameOver || this.isTimerPaused) return;
    
    
    
            //get randomChosenPackage value
    
            var package = this.randomChosenPackages[this.packageId]
    
            var missingTarget = 0
    
            //console.log("randomChosenPackage ales -->", this.randomChosenPackages[this.packageId])
    
            //console.log("prizesArray premiile din rCP-->", this.prizesWonArray);
    
    
    
            var positionsByValue = {}
    
            this.prizesWonArray.forEach(prize => {
    
                //console.log(prize)
    
                positionsByValue[prize[0]] = prize[2]
    
            }) // {200: 6, 500: 4, 150: 10, ....}
    
    
    
            console.log("pozitii premii -->", positionsByValue)
    
    
    
            // package = {... throws: [0, 500]}
    
            // package.throws = ex: [0, 500]
    
            //array cu 2 valori care reprez pozitia celor 2 throws [0, 3]
    
            package.throws.forEach(throwValue => {
    
                if (throwValue === 0) {
    
                    this.throws.push(0)
    
                } else {
    
                    this.throws.push(positionsByValue[throwValue])
    
                }
    
            });
    
    
    
    
    
            //console.log("throws --->", this.throws)
    
    
    
            //console.log('currentTrow --->', this.currentThrow)
    
    
    
    
    
            var rndWonPrize = this.rndNumber(0, this.prizesWonArray.length - 1),
    
                rndWonPrizePosition = this.throws[this.currentThrow],
    
                $selectedGridElmImg = this.root.find('.gridElm' + rndWonPrizePosition + ' img'),
    
                $shootingArrows = this.root.find('.shootingArrows'),
    
                $shootingSelectedArrow = $shootingArrows.children('.arrow-' + $selectedGridElmImg.attr('data-arrow'));
    
    
    
            this.isTimerPaused = true;
    
            this.currentThrow++;
    
    
    
            //console.log("prizesWonArray =>", this.prizesWonArray);
    
    
    
            //console.log('rndWonPrize -->', rndWonPrize);
    
            //console.log('rndWonPrizePosition -->', rndWonPrizePosition);
    
    
    
            clearInterval(this.arrowsAnimationInterval);
    
    
    
            //$shootingArrows.show().children('img').hide();
    
            $shootingArrows.hide();
    
    
    
    
    
    
    
            $shootingSelectedArrow.css('opacity', '').addClass('shootingArrowDisplay');
    
    
    
            this.shootingElmAnimate(rndWonPrizePosition);
    
        },
    
    
    
        shootingElmAnimate: function (gridElmPosition) {
    
            var _this = this,
    
                $shootingElm = this.root.find('.shootingElm'),
    
                $belowShootingElm = this.root.find('.belowShootingElm'),
    
                $shootingElmAnimated = $('.shootingElmAnimated'),
    
                $selectedGridElm = this.root.find('.gridElm' + gridElmPosition),
    
                $selectedGridElmImg = $selectedGridElm.children('img'),
    
                shootingElmOnTargetSize = ($selectedGridElmImg.width() * 60 / 100),
    
                isScorePrize = $selectedGridElmImg.hasClass('missImg') ? false : true,
    
                $totalLivesLeft = this.root.find('.livesWrapper ul li:last-child'),
    
                $headerText = this.rootHeader.find('.headerText'),
    
                $playBtn = this.root.find('.playBtn'),
    
                $shootingArrowsImgs = this.root.find('.shootingArrows').children();
    
            $buttonText = this.root.find('.buttonText');
    
                $shootingArrows = this.root.find('.shootingArrows'),
    
    
    
    
    
            // Reset
    
            $shootingElmAnimated.removeAttr('style');
    
    
    
            var topOffset = 0;
    
            var leftOffset = 0
    
    
    
            if ($('.cy-main-wrapper>.cy-navbar-container').length > 0) {
    
                topOffset = $('.cy-main-wrapper>.cy-navbar-container').outerHeight();
    
            }
    
    
    
            if ($('.cy-navbar-mobile-wrapper').length > 0) {
    
                topOffset = $('.cy-navbar-mobile-wrapper').outerHeight()
    
            }
    
    
    
    
    
            if ($('#orbit-container>.cy-main-nav.main-nav').length > 0) {
    
                // exista sidebar Desktop
    
                leftOffset = $('.cy-main-nav, .main-nav').outerWidth();
    
            }
    
    
    
    
    
           if(document.querySelector("#orbit-container > .mobile-menu-header") || window.innerWidth < 1280) {
    
               // mobile width - no sidebar
    
               leftOffset = 0;
    
           }
    
    
    
            // Start
    
            $shootingElmAnimated.css({
    
                width: $shootingElm.width() + 'px',
    
                top: ($shootingElm.offset().top - topOffset) + 'px',
    
                left: ($shootingElm.offset().left - leftOffset) + 'px',
    
                display: 'block',
    
            });
    
    
    
            // Hide Original shooting element & disable elements
    
            $shootingElm.hide();
    
            //$playBtn.attr('src', $playBtn.attr('data-click')).addClass('disabled');
    
            //$buttonText.attr('src', $playBtn.attr('data-click')).addClass('disabled');
    
    
    
    
    
            // Activate the animation
    
            setTimeout(function () {
    
                // Disable elements
    
                //$headerText.addClass('headerTextDisabled');
    
                //$playBtn.attr('src', $playBtn.attr('data-disabled'));
    
                $shootingArrowsImgs.removeClass('shootingArrowDisplay').fadeOut();
    
    
    
                // if (typeof window.initSoundShooting === "undefined") {
    
                //     window.initSoundShooting = "init"
    
                   if(_this.mute == false) {
    
                        try {
    
                            ion.sound.play('shootingElement');
    
                        } catch (e) {}
    
                    }
    
                // }
    
    
    
    
    
                $belowShootingElm.fadeOut();
    
    
    
                $shootingElmAnimated.css({
    
                    'animation-name': 'kickAnimation',
    
                    'animation-duration': '1s',
    
                    '-webkit-animation-name': 'kickAnimation',
    
                    '-webkit-animation-duration': '1s',
    
                }).animate({
    
                    'bottom': 0,
    
                    'padding-bottom': 0,
    
                    'margin-bottom': 0,
    
    
    
                    'left': ($selectedGridElmImg.offset().left + ($selectedGridElmImg.width() / 2 - (shootingElmOnTargetSize / 2))) - leftOffset,
    
                    'top': ($selectedGridElmImg.offset().top + ($selectedGridElmImg.width() / 2 - (shootingElmOnTargetSize / 2))) - topOffset,
    
    
    
                    'width': shootingElmOnTargetSize + 'px',
    
                    'padding-left': 0,
    
                }, 800, function () {
    
                });
    
    
    
                // Change to hit image
    
                  setTimeout(function () {
    
         $selectedGridElmImg.attr('data-origin', $selectedGridElmImg.attr('src')).attr('src',
    
             (!isScorePrize) ? $$hitMiss$$ : $$hitTarget$$
    
         );
    
    
    
    
    
         if (_this.mute == false) {
    
    
    
             if (isScorePrize) {
    
                 try {
    
                     ion.sound.play('target_score');
    
                 } catch (e) {}
    
             } else {
    
                 try {
    
                     ion.sound.play('target_miss');
    
                 } catch (e) {}
    
             }
    
    
    
    
    
    
    
         }
    
     }, 750);
    
    
    
    
    
                // Fadeout the ball
    
                $shootingElmAnimated.delay(800).fadeOut('slow', function () {
    
                    _this.showSplashScreen(isScorePrize);
    
                });
    
    
    
    
    
    
    
                // Fadeout the hit image
    
                setTimeout(function () {
    
                    var totalLivesLeft = parseInt($totalLivesLeft.text()) - 1;
    
                    $selectedGridElm.fadeOut(1800, function () {
    
                        $selectedGridElmImg.attr("src", $selectedGridElmImg.attr('data-origin'));
    
                    }).fadeIn(600, function () {
    
    
    
                        // Restore elements
    
                        $totalLivesLeft.text(totalLivesLeft);
    
                        _this.showSplashScreen(isScorePrize, true);
    
                        _this.isTimerPaused = false;
    
    
    
                        //Game Over
    
                        if (totalLivesLeft === 0) {
    
                            setTimeout(function () {
    
                                _this.gameOver();
    
                            }, 800);
    
                        } else {
    
                            // Restore elements
    
                            $shootingElm.fadeIn();
    
                            $belowShootingElm.fadeIn();
    
                            //$headerText.removeClass('headerTextDisabled');
    
                            //$playBtn.attr('src', $playBtn.attr('data-origin')).removeClass('disabled');
    
                            $shootingArrows.show();
    
                            _this.showRandomArrows();
    
                        }
    
                    });
    
    
    
                }, 2800);
    
    
    
            }, 500);
    
        },
    
    
    
        showRandomArrows: function () {
    
            var _this = this,
    
                $shootingArrows = this.root.find('.shootingArrows'),
    
                $shootingArrowsChildren = $shootingArrows.children(),
    
                numTotalArrows = $shootingArrowsChildren.length - 1;
    
    
    
            this.arrowsAnimationInterval = setInterval(function () {
    
                //$shootingArrowsChildren.fadeOut('fast').eq(_this.rndNumber(0,numTotalArrows)).show();
    
                $shootingArrowsChildren.fadeOut('fast').eq(_this.rndNumber(0, numTotalArrows)).show();
    
            }, 100);
    
    
    
        },
    
    
    
        showSplashScreen: function (isScored, hideSplashScreen) {
    
            var _this = this,
    
                scoreOrMiss = ((isScored) ? 'score' : 'miss'),
    
                $splashScreenOverlay = this.rootHeader.find('.splashScreenOverlay'),
    
                $splashContent = this.rootHeader.find('.splashContent'),
    
                $splashContentScoreMiss = $splashContent.children('.' + scoreOrMiss),
    
                $bgElementsDots = $splashContent.find('.splashResultDots_' + scoreOrMiss),
    
                $bgElementsBg = $splashContent.find('.splashResultBg_' + scoreOrMiss),
    
                $splashResultText = $splashContent.find('.splashResultText_' + scoreOrMiss);
    
    
    
            if (hideSplashScreen !== true) {
    
                if (_this.mute == false) {
    
                    try {
    
                        ion.sound.play(scoreOrMiss);
    
                    } catch (e) { }
    
                }
    
                $splashContent.show();
    
                $splashScreenOverlay.show();
    
                $splashContentScoreMiss.show();
    
                $bgElementsDots.fadeIn('fast');
    
                $bgElementsBg.show().css('animation', 'splashScreenBgElements 0.25s');
    
                setTimeout(function () {
    
                    $splashResultText.show().css('animation', 'splashScreenText 0.3s');
    
                }, 150);
    
            } else {
    
                $splashContent.fadeOut('fast');
    
                $splashScreenOverlay.fadeOut('fast');
    
                $splashContentScoreMiss.fadeOut('fast');
    
                $bgElementsDots.fadeOut('fast');
    
            }
    
    
    
        },
    
    
    
        // gameTimer: function () {
    
        //     var _this = this,
    
        //         $gameTimer = this.rootHeader.find('.gameTimer'),
    
        //         $gameTimer_time = $gameTimer.children('span'),
    
        //         convertIntToTimerFormat = function(time) {
    
        //             var date = new Date(null);
    
        //             date.setSeconds(time);
    
        //             return date.toISOString().substr(14, 5);
    
        //         },
    
        //         gameTimerSecondsLeft = this.timerSeconds;
    
    
    
        //     $gameTimer_time.html(convertIntToTimerFormat(gameTimerSecondsLeft));
    
    
    
        //     if(_this.gameTimerInterval) {
    
        //         clearInterval(_this.gameTimerInterval);
    
        //     }
    
        //     _this.gameTimerInterval = setInterval(function() {
    
        //         if(_this.isTimerPaused && gameTimerSecondsLeft < 7) return;
    
        //         gameTimerSecondsLeft--;
    
    
    
        //         if(gameTimerSecondsLeft>0) {
    
        //             $gameTimer_time.html(convertIntToTimerFormat(gameTimerSecondsLeft));
    
        //         } else {
    
        //             clearInterval(_this.gameTimerInterval);
    
        //             if(_this.timerGameOver) {
    
        //                 $gameTimer_time.html('GAME OVER!');
    
        //             } else {
    
        //                 $gameTimer_time.html('00:00');
    
        //             }
    
    
    
        //             _this.gameOver();
    
        //         }
    
        //     },1000);
    
        // },
    
    
    
        gameOver: function () {
    
            var _this = this,
    
                flipRndCard = null,
    
                autoPlayInterval = null,
    
                $playBtn = this.root.find('.playBtn'),
    
                $headerText = this.rootHeader.find('.headerText'),
    
                $shootingArrowsImgs = this.root.find('.shootingArrows').children(),
    
                $totalLivesLeft = this.root.find('.livesWrapper ul li:last-child'),
    
                $shootingElm = this.root.find('.shootingElm'),
    
                $belowShootingElm = this.root.find('.belowShootingElm');
    
            $buttonText = this.root.find('.buttonText');
    
            $shootingArrows = this.root.find('.shootingArrows');
    
    
    
    
    
    
    
            this.isGameOver = true;
    
    
    
            if (this.prizesWonArray.length == 0) {
    
                this.showPopup('gameOver');
    
            } else {
    
                this.showPopup('congrats');
    
            }
    
    
    
            //$playBtn.attr('src', $playBtn.attr('data-disabled')).addClass('disabled');
    
    
    
            $buttonText.css({
    
                display: "none"
    
            })
    
    
    
            $shootingArrows.css({
    
                display: "none"
    
            })
    
    
    
            //$headerText.addClass('headerTextDisabled');
    
            clearInterval(this.arrowsAnimationInterval);
    
            $shootingArrowsImgs.fadeOut();
    
            $shootingElm.fadeOut();
    
            $belowShootingElm.fadeOut();
    
            $totalLivesLeft.text('0');
    
        },
    
    
    
        showPopup: function (popupType) {
    
            var _this = this,
    
                $congratsPopup = this.rootHeader.find('.congratsPopup'),
    
                $congratsPopup_prizesContent = $congratsPopup.find('.prizesContent'),
    
                $congratsPopup_close = $congratsPopup.find('.close'),
    
                $congratsPopup_tcs = $congratsPopup.find('.tcs'),
    
                $congratsPopup_h4 = $congratsPopup.find('h4'),
    
                $congratsPopup_h5 = $congratsPopup.find('h5');
    
    
    
            $congratsPopup_prizesContent.html('');
    
    
    
            $congratsPopup_close.unbind('click').click(function () {
    
                if (_this.debugMode || popupType == 'exit') {
    
                    $congratsPopup.fadeOut();
    
                } else {
    
                    window.close();
    
                }
    
            });
    
    
    
            if (popupType != 'exit') {
    
                // this.root.find('.gameBoard .selectedPrize').each(function () {
    
                //     var $prize = $(this).attr('data-prize');
    
    
    
                //     if ($prize.length) {
    
                //         $congratsPopup_prizesContent.append('<div class="prize">' + $prize + '</div>');
    
                //     }
    
                // });
    
    
    
    
    
                $congratsPopup_prizesContent.append('<p class="prize">' + this.randomChosenPackages[this.packageId].totalPrize + '% Freeplay!</p>');
    
                clearInterval(this.gameTimerInterval);
    
            }
    
    
    
            $congratsPopup_h4.html(this.popupPrizesText[popupType].top);
    
            $congratsPopup_h5.html(this.popupPrizesText[popupType].bottom);
    
            //$congratsPopup_tcs.html((popupType == 'exit') ? '&nbsp;<br>&nbsp;' : this.popupFinalTcs);
    
    
    
            $congratsPopup.fadeIn('slow');
    
            this.rootHeader.find('.congratsPopup h5, .congratsPopup h4').fitText(1.1);
    
        },
    
    
    
        // createExitPopupEvent: function () {
    
        //     var _this = this,
    
        //         mouseY = 0,
    
        //         topValue = 0;
    
    
    
        //     window.addEventListener("mouseout",function(e){
    
        //             mouseY = e.clientY;
    
        //             if(mouseY<topValue && !_this.isGameOver && !_this.isTimerPaused) {
    
        //                 _this.showPopup('exit');
    
        //             }
    
        //         },
    
        //         false);
    
        // },
    
    
    
        collectRequestParams: function () {
    
            // use b2cweb.js to collect request params:
    
            try {
    
                this.claimId = getParameterByName('allocatedbonusid');
    
                this.customerid = getParameterByName('customerid');
    
                this.skinid = getParameterByName('skinid');
    
                this.gameid = getParameterByName('gameid');
    
                this.device = Bingo.globals.Detection.device;
    
                this.browser = Bingo.globals.Detection.browser;
    
                this.platform = Bingo.globals.Detection.platform;
    
                this.version = Bingo.globals.Detection.version;
    
                this.requestUrl = 'https://data.joyofbingo.com/service.asmx/GambitClaim';
    
    
    
                return this.customerid !== null && this.skinid !== null && this.gameid !== null && this.claimId !== null;
    
            } catch (e) {
    
                return false
    
            }
    
        },
    
    
    
        getPrizes: function () {
    
            var data = {
    
                // "StatusCode": 0,
    
                // "Message": "success",
    
                // "IsDON": null,
    
                "Packages": [],
    
                // "BonusGameId": 462
    
            };
    
    
    
            this.claimResponse(data);
    
        },
    
    
    
        showPrizes: function () {
    
            var _this = this
    
            $pageWrapper = this.root.find('.pageWrapper')
    
            $shootingArrows = this.root.find('.shootingArrows')
    
    
    
    
    
            if (this.prizesWonArray.length === 0) {
    
                $pageWrapper.css({
    
                    opacity: "1"
    
                });
    
                $shootingArrows.fadeIn();
    
    
    
                //console.log('Error!\nData is missing!!!! from showPrizes');
    
            } else {
    
                this.fillGridBoardPrizes();
    
            }
    
        },
    
    
    
    
    
        claimResponse: function (data) {
    
            if (typeof data !== 'undefined') {
    
                //[TEST BLOCK START]
    
                var _this = this,
    
    
    
                    $pageWrapper = this.root.find('.pageWrapper'),
    
                    $playBtn = _this.root.find('.playBtn'),
    
                    $headerText = this.rootHeader.find('.headerText'),
    
                    totalScoreTargets = this.gridTargetPositionsArray.length,
    
                    getRndPercent = function (isMin) {
    
                        return (100 - (100 / totalScoreTargets)) / ((isMin) ? 4 : 2);
    
                    };
    
    
    
                this.cardToChoose = data.Packages.length;
    
                this.prizesWonArray = [];
    
    
    
    
    
                var currentPackage = this.randomChosenPackages[this.packageId]
    
    
    
                console.log('package -->', currentPackage)
    
    
    
                if (typeof currentPackage == "undefined" || currentPackage > 5 || currentPackage == "") {
    
                    $pageWrapper.css({
    
                        opacity: "1"
    
                    })
    
                } else {
    
                    //place values on targets
    
                    for (var p = 0; p <= 9; p++) {
    
                        this.prizesWonArray.push([currentPackage.positions[p], '%']);
    
                        //console.log("prizesWonArray dupa push", this.prizesWonArray);
    
                    }
    
                }
    
    
    
    
    
    
    
                this.showPrizes();
    
                // this.createExitPopupEvent();
    
                //$playBtn.attr('src', $playBtn.attr('data-origin'));
    
                //$headerText.removeClass('headerTextDisabled');
    
                this.showRandomArrows();
    
    
    
                // if (this.timer) {
    
                //     this.gameTimer();
    
                // }
    
    
    
                // console.log(data);
    
                // }
    
            }
    
            else {
    
                alert('Error!\nData is missinggg');
    
                //$('.noCongrats').show();
    
                //this.showPopup('Error', 'data is missing', null);
    
            }
    
        },
    
    
    
    
    
        getGameUniqueInfo: function () {
    
            var prizesTcs = this.uniqueInfo[this.gameid],
    
                defaultPrizesTcs = this.uniqueInfo["default"];
    
    
    
            if (prizesTcs !== undefined) {
    
                if (Object.keys(prizesTcs).length > 0) {
    
                    return prizesTcs;
    
                }
    
            }
    
    
    
            if (defaultPrizesTcs !== undefined) {
    
                if (Object.keys(defaultPrizesTcs).length > 0) {
    
                    return defaultPrizesTcs;
    
                }
    
            }
    
    
    
            return null;
    
    
    
        },
    
    
    
        rndNumber: function (min, max, round) {
    
            if (round === undefined) {
    
                return Math.floor(Math.random() * (max - min + 1) + min);
    
            } else {
    
                if (round) {
    
                    return this.rndRoundNumber(min, max);
    
                } else {
    
                    return Math.floor(Math.random() * (max - min + 1) + min);
    
                }
    
            }
    
        },
    
        rndRoundNumber: function (min, max) {
    
            return Math.ceil(Math.floor(Math.random() * (max - min + 1) + min) / 5) * 5 - 5;
    
        },
    
        isMobile: function () {
    
            var check = false;
    
            (function (a) { if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true })(navigator.userAgent || navigator.vendor || window.opera);
    
            return check;
    
            // return platform == "phone";
    
        },
    
        isTablet: function () {
    
            try {
    
                var isTouchDevice = function () { return 'ontouchstart' in window || 'onmsgesturechange' in window; };
    
                var isDesktop = window.screenX != 0 && !isTouchDevice() ? true : false;
    
                return (this.isMobile && !isDesktop && screen.width > 700);//&& window.matchMedia("(orientation: landscape)").matches
    
            } catch (e) {
    
                return false;
    
            }
    
            // return platform == "tablet";
    
        }
    
    
    
    };
    
    
    
    (function ($) {
    
        $.fn.fitText = function (kompressor, options) {
    
            // Setup options
    
            var compressor = kompressor || 1,
    
                settings = $.extend({
    
                    'minFontSize': Number.NEGATIVE_INFINITY,
    
                    'maxFontSize': Number.POSITIVE_INFINITY
    
                }, options);
    
            return this.each(function () {
    
                // Store the object
    
                var $this = $(this);
    
                // Resizer() resizes items based on the object width divided by the compressor * 10
    
                var resizer = function () {
    
                    $this.css('font-size', Math.max(Math.min($this.width() / (compressor * 10), parseFloat(settings.maxFontSize)), parseFloat(settings.minFontSize)));
    
                };
    
                // Call once to set.
    
                resizer();
    
                // Call on resize. Opera debounces their resize by default.
    
                $(window).on('resize.fittext orientationchange.fittext', resizer);
    
            });
    
        };
    
    })(jQuery);
    
    
    
    function debugSetOption(option, value) {
    
        shootoutGame[option] = value;
    
        if (shootoutGame.debugMode) {
    
            try {
    
                //console.log(option + ': ' + shootoutGame[option]);
    
            } catch (e) { }
    
        }
    
    }
    
    
    
    
    
    
    
    // var rndNumber = function (min, max) {
    
    //     return Math.floor(Math.random() * (max - min + 1) + min);
    
    // },
    
    // ifShouldMiss = (rndNumber(1, 3) == 2) ? true : false;
    
    
    
    
    
    $(".showHideTermAndCond").click(function () {
    
        if (brandStyle == "style888casino") {
    
            plusMinus = $(".plusMinus").text();
    
            if (plusMinus == "[+]") {
    
                $(".plusMinus").text("[-]");
    
                tcShow = true;
    
            } else {
    
                $(".plusMinus").text("[+]");
    
                tcShow = false;
    
            }
    
            $(".slidingDiv").toggle();
    
        }
    
    });
    
    
    
    var userClicked = false;
    
    var throwsTimes = 0;
    
    
    
    
    
    function goToHomepage() {
    
        //console.log("go to homepage -->")
    
        window.location.href = '/';
    
    }
    
    
    
    
    
    var overlayClick = false;
    
    
    
    
    
    casino.ready(function () {
    
    
    
        //console.log("claim-->", claim());
    
    
    
        //autoplay after 20 secs
    
    var startCountOne = 4;
    
    var startCountTwo = 4;
    
    var throwsIntervalOne;
    
    var throwsIntervalTwo;
    
    
    
    
    
    //console.log("a ajuns sa verifice conditia pentru autoplay");
    
    
    
    var overlayInterval = setInterval(() => {
    
        if (overlayClick == true) {
    
            autoThrow();
    
            clearInterval(overlayInterval);
    
        }
    
    });
    
    
    
    function autoThrow() {
    
        var _that = this;
    
    
    
        setTimeout(function () {
    
            if (userClicked == false) {
    
    
    
                if (throwsTimes == 0) {
    
                    //console.log("in  if throwsTimes == 0 -->", throwsTimes);
    
    
    
                    throwsIntervalOne = setInterval(function () {
    
                        startCountOne--;
    
                        //console.log('throwsIntervalOne-->', throwsIntervalOne)
    
                        document.querySelector('.buttonText').innerHTML = startCountOne;
    
    
    
                        //console.log("startCountOne -->", startCountOne)
    
    
    
                        if (startCountOne <= 0) {
    
                            //console.log("startCountOne startCountOne <= 0 care face clearInterval -->", throwsIntervalOne, startCountOne)
    
                            clearInterval(throwsIntervalOne);
    
                        }
    
    
    
                    }, 1000)
    
    
    
                    setTimeout(function () {
    
                        this.shootoutGame.shootingElmAction();
    
    
    
                    }, 3000)
    
                }
    
    
    
                setTimeout(function () {
    
    
    
                    //console.log("### throw times => ",throwsTimes);
    
                    
    
    
    
                    if (throwsTimes >= 1) {
    
                        document.querySelector('.buttonText').innerHTML = 'THROW';
    
    
    
                        //console.log('startCountTwo->', startCountTwo)
    
    
    
                        throwsIntervalTwo = setInterval(function () {
    
                            startCountTwo--;
    
                            //console.log('throwsIntervalTwo-->', throwsIntervalTwo)
    
                            document.querySelector('.buttonText').innerHTML = startCountTwo;
    
    
    
                            //console.log("startCountTwo -->", startCountTwo)
    
    
    
                            if (startCountTwo <= 0) {
    
                                //console.log("startCountTwo startCountTwo <= 0 care face clearInterval -->", throwsIntervalTwo, startCountTwo)
    
                                clearInterval(throwsIntervalTwo);
    
                            }
    
    
    
                        }, 1000)
    
    
    
                        setTimeout(function () {
    
                            //console.log("bla bla bla")
    
                            _that.shootoutGame.shootingElmAction();
    
                        }, 3000)
    
    
    
                    }
    
    
    
                }, 8000)
    
            } 
    
    
    
    
    
        }, 20000)
    
    }
    
    
    
        
    
    
    
    
    
        document.querySelector('.closePopupBtn').addEventListener('click', function () {
    
            // window.open("", "_self");
    
            // window.close();
    
            // ion.sound.stop();
    
            window.location.href = '/';
    
        })
    
    
    
        //console.log("claim 1 -->", claim());
    
    
    
        setTimeout(function () {
    
            //console.log("claim 2 -->", claim())
    
        }, 3000);
    
    
    
        var interval = setInterval(function () {
    
            if (claim() != 'waiting') {
    
                $('.gameLoader').hide();
    
    
    
                if (claim() == '4') {
    
                    msgDisplay = true;
    
                    RoBgameOver(messagegObj.usedMsg, popupImgObj.usedMsg);
    
                } else if (claim() == '2') {
    
                    msgDisplay = true;
    
                    RoBgameOver(messagegObj.expiredMsg, popupImgObj.expiredMsg);
    
                } else if (claim() == '3' || ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'].indexOf(randomChosenPackage) < 0) {
    
                    msgDisplay = true;
    
                    RoBgameOver(messagegObj.errorMsg, popupImgObj.errorMsg)
    
                } else if (claim() == '1') {
    
                    // autoThrow();
    
                    document.querySelector(' .instructionsOverlay').style.display = "flex";
    
                }
    
                clearInterval(interval);
    
            }
    
        })
    
    
    
        window.addEventListener('resize', function () {
    
            //setPopupHeight();
    
        })
    
    
    
        // Sound
    
        ion.sound({
    
            sounds: [
    
                {
    
                    alias: 'bg',
    
                    name: "crowdBgsound",
    
                    loop: true,
    
                    volume: 0.6
    
                },
    
                {
    
                    alias: 'shootingElement',
    
                    name: "kick",
    
                },
    
                {
    
                    alias: 'miss',
    
                    name: "miss_from_long",
    
                },
    
                {
    
                    alias: 'score',
    
                    name: "goal_from_long",
    
                },
    
                {
    
                    alias: 'target_score',
    
                    name: "targetScore",
    
                    volume: 1.2
    
                },
    
                {
    
                    alias: 'target_miss',
    
                    name: "targetMiss",
    
                    volume: 1.2
    
                },
    
            ],
    
    
    
            path: "https://promo.888.com/2021/888Casino/sounds/easter/",
    
            volume: 1,
    
            preload: true,
    
            multiplay: true,
    
        });
    
    
    
        shootoutGame = new shootoutGambit('.shootoutGame', {
    
            //debugMode: false,
    
            timer: true,
    
            timerSeconds: 3000,
    
            returnCardRndAngle: false,
    
            timerGameOver: false,
    
            popupPrizesText: {
    
                congrats: {
    
                    top: 'Egg-celent throwing!<br>You just got',
    
                    bottom: '',
    
                },
    
                gameOver: {
    
                    top: '<span>You have run out of time, but here\'s a</span>',
    
                    bottom: '',
    
                },
    
                exit: {
    
                    top: 'Throw the eggs in the baskets to win a prize before exiting the game.',
    
                    bottom: '<span>If you exit now, a prize will be chosen for you.</span>',
    
                },
    
            },
    
            uniqueInfo: {
    
                default: {
    
                    numOfKicks: 2,
    
                },
    
            },
    
            bolRoundPrizes: true,
    
            numOfGridColumns: 6,
    
            gridElementsPositions: {
    
                row1: {
    
                    col1: { template: 'miss', arrow: '09' },
    
                    col4: { template: 'miss', arrow: '05' }
    
                },
    
                row2: {
    
                    col1: { template: 'target', arrow: '11' },
    
                    col3: { template: 'miss', arrow: '06' },
    
                    col4: { template: 'target', arrow: '04' },
    
                    col5: { template: 'miss', arrow: '03' },
    
                    col6: { template: 'target', arrow: '03' }
    
                },
    
                row3: {
    
                    col1: { template: 'target', arrow: '10' },
    
                    col2: { template: 'miss', arrow: '08' },
    
                    col3: { template: 'target', arrow: '07' },
    
                    col6: { template: 'target', arrow: '02' }
    
                }
    
            }
    
        });
    
    
    
    
    
    
    
        $('.pageWrapper').css('opacity', '1').hide().delay(200).fadeIn('fast', function () {
    
        });
    
    });