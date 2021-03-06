/**
 * rkl.js Library -     (C) 2013 by Romano Kleinwächter - Alle Rechte vorbehalten
 *                      E-Mail: romano.kleinwaechter@gmail.com
 * ******************************************************************************
 *
 * Diese Bibliothek inkl. aller Komponenten unterliegt der BSD Lizenz.
 * Siehe dazu: http://de.wikipedia.org/wiki/BSD-Lizenz und
 * http://opensource.org/licenses/BSD-2-Clause.
 *
 * Sollten externe Bibliotheken von dritten verwendet werden, so unterliegen
 * diese den jeweiligen Lizenzen.
 *
 * Sie können diese Arbeit für zukünftige Weiterentwicklungen durch eine
 * Spende unterstützen.
 *
 * Bitcoin:     1HtGPhKPrqJijS6ofUQ3r6zTuVrbVcbXKC
 * Litecoin:    LKP9wa9JmDDh37XzAq31KyZR3HYBEGF589
 * Primecoin:   AZbJUUbSkWuV8fvTNieQbAmPGBNEhAjSsm
 *
 *
 * Builddatum:  2013-08-27 15:59:15
 * Quellcode:	https://github.com/rkl-/rkl.js
 * ******************************************************************************
 *
 * LIZENZ:
 *
 * Copyright (c) 2013, Romano Kleinwächter All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions
 * are met:
 *
 * Redistributions of source code must retain the above copyright notice,
 * this list of conditions and the following disclaimer.  Redistributions
 * in binary form must reproduce the above copyright notice, this list of
 * conditions and the following disclaimer in the documentation and/or other
 * materials provided with the distribution.  THIS SOFTWARE IS PROVIDED BY
 * THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED
 * WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN
 * NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
 * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS
 * OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION)
 * HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT,
 * STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING
 * IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 * POSSIBILITY OF SUCH DAMAGE.
 */
var rkl;
(function (rkl) {
    (function (crypt) {
        (function (mvc) {
            var CModel = (function () {
                function CModel() {
                    this.utf8str = crypt.sjcl['codec']['utf8String'];
                    this.base64 = crypt.sjcl['codec']['base64'];
                    this.hex = crypt.sjcl['codec']['hex'];
                    this.bArray = crypt.sjcl['bitArray'];
                    this.keys = null;
                }
                return CModel;
            })();
            mvc.CModel = CModel;
        })(crypt.mvc || (crypt.mvc = {}));
        var mvc = crypt.mvc;
    })(rkl.crypt || (rkl.crypt = {}));
    var crypt = rkl.crypt;
})(rkl || (rkl = {}));
var rkl;
(function (rkl) {
    (function (crypt) {
        (function (mvc) {
            var CView = (function () {
                function CView() {
                }
                CView.prototype.printError = function (_e) {
                    console.error('RKL::CRYPT::ERROR: ' + _e.getMessage());
                };
                return CView;
            })();
            mvc.CView = CView;
        })(crypt.mvc || (crypt.mvc = {}));
        var mvc = crypt.mvc;
    })(rkl.crypt || (rkl.crypt = {}));
    var crypt = rkl.crypt;
})(rkl || (rkl = {}));
var rkl;
(function (rkl) {
    (function (crypt) {
        (function (mvc) {
            var CController = (function () {
                function CController() {
                }
                return CController;
            })();
            mvc.CController = CController;
        })(crypt.mvc || (crypt.mvc = {}));
        var mvc = crypt.mvc;
    })(rkl.crypt || (rkl.crypt = {}));
    var crypt = rkl.crypt;
})(rkl || (rkl = {}));
var rkl;
(function (rkl) {
    (function (crypt) {
        (function (eca) {
            (function (ERROR) {
                ERROR[ERROR["DEP"] = -1] = "DEP";
                ERROR[ERROR["INVPPH"] = -2] = "INVPPH";
                ERROR[ERROR["INVHASH"] = -3] = "INVHASH";
                ERROR[ERROR["NMYSIGN"] = -4] = "NMYSIGN";
                ERROR[ERROR["ABSMETH"] = -5] = "ABSMETH";
            })(eca.ERROR || (eca.ERROR = {}));
            var ERROR = eca.ERROR;
        })(crypt.eca || (crypt.eca = {}));
        var eca = crypt.eca;
    })(rkl.crypt || (rkl.crypt = {}));
    var crypt = rkl.crypt;
})(rkl || (rkl = {}));
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var rkl;
(function (rkl) {
    (function (crypt) {
        (function (eca) {
            var ErrorClass = Error;

            var AException = (function (_super) {
                __extends(AException, _super);
                function AException(_code, _title, _message) {
                    _super.call(this, _message);
                    this.mCode = _code;
                    this.mTitle = _title;
                    this.mMessage = _message;
                    this.message = _title + ': ' + _message;
                }
                AException.prototype.getCode = function () {
                    return this.mCode;
                };

                AException.prototype.getTitle = function () {
                    return this.mTitle;
                };

                AException.prototype.getMessage = function () {
                    return this.mMessage;
                };
                return AException;
            })(ErrorClass);
            eca.AException = AException;
        })(crypt.eca || (crypt.eca = {}));
        var eca = crypt.eca;
    })(rkl.crypt || (rkl.crypt = {}));
    var crypt = rkl.crypt;
})(rkl || (rkl = {}));
var rkl;
(function (rkl) {
    (function (crypt) {
        (function (eca) {
            var CMissingDependency = (function (_super) {
                __extends(CMissingDependency, _super);
                function CMissingDependency(_message) {
                    if (typeof _message === "undefined") { _message = null; }
                    _super.call(this, eca.ERROR.DEP, 'missingDependency', _message);
                }
                return CMissingDependency;
            })(eca.AException);
            eca.CMissingDependency = CMissingDependency;
        })(crypt.eca || (crypt.eca = {}));
        var eca = crypt.eca;
    })(rkl.crypt || (rkl.crypt = {}));
    var crypt = rkl.crypt;
})(rkl || (rkl = {}));
var rkl;
(function (rkl) {
    (function (crypt) {
        (function (eca) {
            var CAbstractMethod = (function (_super) {
                __extends(CAbstractMethod, _super);
                function CAbstractMethod(_message) {
                    if (typeof _message === "undefined") { _message = null; }
                    _super.call(this, eca.ERROR.ABSMETH, 'abstractMethod', _message);
                }
                return CAbstractMethod;
            })(eca.AException);
            eca.CAbstractMethod = CAbstractMethod;
        })(crypt.eca || (crypt.eca = {}));
        var eca = crypt.eca;
    })(rkl.crypt || (rkl.crypt = {}));
    var crypt = rkl.crypt;
})(rkl || (rkl = {}));
var rkl;
(function (rkl) {
    (function (crypt) {
        (function (eca) {
            var CInvalidPassphrase = (function (_super) {
                __extends(CInvalidPassphrase, _super);
                function CInvalidPassphrase(_message) {
                    if (typeof _message === "undefined") { _message = null; }
                    _super.call(this, eca.ERROR.INVPPH, 'invalidPassphrase', _message);
                }
                return CInvalidPassphrase;
            })(eca.AException);
            eca.CInvalidPassphrase = CInvalidPassphrase;
        })(crypt.eca || (crypt.eca = {}));
        var eca = crypt.eca;
    })(rkl.crypt || (rkl.crypt = {}));
    var crypt = rkl.crypt;
})(rkl || (rkl = {}));
var rkl;
(function (rkl) {
    (function (crypt) {
        (function (eca) {
            var CInvalidHash = (function (_super) {
                __extends(CInvalidHash, _super);
                function CInvalidHash(_message) {
                    if (typeof _message === "undefined") { _message = null; }
                    _super.call(this, eca.ERROR.INVHASH, 'invalidHash', _message);
                }
                return CInvalidHash;
            })(eca.AException);
            eca.CInvalidHash = CInvalidHash;
        })(crypt.eca || (crypt.eca = {}));
        var eca = crypt.eca;
    })(rkl.crypt || (rkl.crypt = {}));
    var crypt = rkl.crypt;
})(rkl || (rkl = {}));
var rkl;
(function (rkl) {
    (function (crypt) {
        (function (eca) {
            var CNotMySignature = (function (_super) {
                __extends(CNotMySignature, _super);
                function CNotMySignature(_message) {
                    if (typeof _message === "undefined") { _message = null; }
                    _super.call(this, eca.ERROR.NMYSIGN, 'notMySignature', _message);
                }
                return CNotMySignature;
            })(eca.AException);
            eca.CNotMySignature = CNotMySignature;
        })(crypt.eca || (crypt.eca = {}));
        var eca = crypt.eca;
    })(rkl.crypt || (rkl.crypt = {}));
    var crypt = rkl.crypt;
})(rkl || (rkl = {}));
var rkl;
(function (rkl) {
    (function (crypt) {
        (function (hash) {
            function sha256(_str) {
                return crypt.sjcl['hash']['sha256']['hash'](_str);
            }
            hash.sha256 = sha256;
        })(crypt.hash || (crypt.hash = {}));
        var hash = crypt.hash;
    })(rkl.crypt || (rkl.crypt = {}));
    var crypt = rkl.crypt;
})(rkl || (rkl = {}));
var rkl;
(function (rkl) {
    (function (crypt) {
        (function (hash) {
            function utf8CRC32(str) {
                var table = "" + "00000000 77073096 EE0E612C 990951BA 076DC419 706AF48F E963A535 " + "9E6495A3 0EDB8832 79DCB8A4 E0D5E91E 97D2D988 09B64C2B 7EB17CBD " + "E7B82D07 90BF1D91 1DB71064 6AB020F2 F3B97148 84BE41DE 1ADAD47D " + "6DDDE4EB F4D4B551 83D385C7 136C9856 646BA8C0 FD62F97A 8A65C9EC " + "14015C4F 63066CD9 FA0F3D63 8D080DF5 3B6E20C8 4C69105E D56041E4 " + "A2677172 3C03E4D1 4B04D447 D20D85FD A50AB56B 35B5A8FA 42B2986C " + "DBBBC9D6 ACBCF940 32D86CE3 45DF5C75 DCD60DCF ABD13D59 26D930AC " + "51DE003A C8D75180 BFD06116 21B4F4B5 56B3C423 CFBA9599 B8BDA50F " + "2802B89E 5F058808 C60CD9B2 B10BE924 2F6F7C87 58684C11 C1611DAB " + "B6662D3D 76DC4190 01DB7106 98D220BC EFD5102A 71B18589 06B6B51F " + "9FBFE4A5 E8B8D433 7807C9A2 0F00F934 9609A88E E10E9818 7F6A0DBB " + "086D3D2D 91646C97 E6635C01 6B6B51F4 1C6C6162 856530D8 F262004E " + "6C0695ED 1B01A57B 8208F4C1 F50FC457 65B0D9C6 12B7E950 8BBEB8EA " + "FCB9887C 62DD1DDF 15DA2D49 8CD37CF3 FBD44C65 4DB26158 3AB551CE " + "A3BC0074 D4BB30E2 4ADFA541 3DD895D7 A4D1C46D D3D6F4FB 4369E96A " + "346ED9FC AD678846 DA60B8D0 44042D73 33031DE5 AA0A4C5F DD0D7CC9 " + "5005713C 270241AA BE0B1010 C90C2086 5768B525 206F85B3 B966D409 " + "CE61E49F 5EDEF90E 29D9C998 B0D09822 C7D7A8B4 59B33D17 2EB40D81 " + "B7BD5C3B C0BA6CAD EDB88320 9ABFB3B6 03B6E20C 74B1D29A EAD54739 " + "9DD277AF 04DB2615 73DC1683 E3630B12 94643B84 0D6D6A3E 7A6A5AA8 " + "E40ECF0B 9309FF9D 0A00AE27 7D079EB1 F00F9344 8708A3D2 1E01F268 " + "6906C2FE F762575D 806567CB 196C3671 6E6B06E7 FED41B76 89D32BE0 " + "10DA7A5A 67DD4ACC F9B9DF6F 8EBEEFF9 17B7BE43 60B08ED5 D6D6A3E8 " + "A1D1937E 38D8C2C4 4FDFF252 D1BB67F1 A6BC5767 3FB506DD 48B2364B " + "D80D2BDA AF0A1B4C 36034AF6 41047A60 DF60EFC3 A867DF55 316E8EEF " + "4669BE79 CB61B38C BC66831A 256FD2A0 5268E236 CC0C7795 BB0B4703 " + "220216B9 5505262F C5BA3BBE B2BD0B28 2BB45A92 5CB36A04 C2D7FFA7 " + "B5D0CF31 2CD99E8B 5BDEAE1D 9B64C2B0 EC63F226 756AA39C 026D930A " + "9C0906A9 EB0E363F 72076785 05005713 95BF4A82 E2B87A14 7BB12BAE " + "0CB61B38 92D28E9B E5D5BE0D 7CDCEFB7 0BDBDF21 86D3D2D4 F1D4E242 " + "68DDB3F8 1FDA836E 81BE16CD F6B9265B 6FB077E1 18B74777 88085AE6 " + "FF0F6A70 66063BCA 11010B5C 8F659EFF F862AE69 616BFFD3 166CCF45 " + "A00AE278 D70DD2EE 4E048354 3903B3C2 A7672661 D06016F7 4969474D " + "3E6E77DB AED16A4A D9D65ADC 40DF0B66 37D83BF0 A9BCAE53 DEBB9EC5 " + "47B2CF7F 30B5FFE9 BDBDF21C CABAC28A 53B39330 24B4A3A6 BAD03605 " + "CDD70693 54DE5729 23D967BF B3667A2E C4614AB8 5D681B02 2A6F2B94 " + "B40BBE37 C30C8EA1 5A05DF1B 2D02EF8D";

                var crc = 0;
                var x = 0;
                var y = 0;

                crc = crc ^ (-1);
                for (var i = 0, iTop = str.length; i < iTop; i++) {
                    y = (crc ^ str.charCodeAt(i)) & 0xFF;
                    x = "0x" + table.substr(y * 9, 8);
                    crc = (crc >>> 8) ^ x;
                }

                return crc ^ (-1);
            }
            hash.utf8CRC32 = utf8CRC32;
        })(crypt.hash || (crypt.hash = {}));
        var hash = crypt.hash;
    })(rkl.crypt || (rkl.crypt = {}));
    var crypt = rkl.crypt;
})(rkl || (rkl = {}));
var rkl;
(function (rkl) {
    (function (crypt) {
        (function (ecc) {
            var CSignedData = (function () {
                function CSignedData(_payload, _signature, _hash) {
                    this.mPayload = null;
                    this.mSignature = null;
                    this.mHash = null;
                    this.mPayload = _payload;
                    this.mSignature = _signature;
                    this.mHash = _hash;
                }
                CSignedData.prototype.getPayload = function () {
                    return this.mPayload;
                };

                CSignedData.prototype.getSignature = function () {
                    return this.mSignature;
                };

                CSignedData.prototype.getHash = function () {
                    return this.mHash;
                };

                CSignedData.prototype.toObject = function () {
                    var obj = {
                        'payload': this.getPayload(),
                        'signature': this.getSignature(),
                        'hash': this.getHash()
                    };
                    return obj;
                };

                CSignedData.prototype.toJSON = function () {
                    return JSON.stringify(this.toObject());
                };
                return CSignedData;
            })();
            ecc.CSignedData = CSignedData;
        })(crypt.ecc || (crypt.ecc = {}));
        var ecc = crypt.ecc;
    })(rkl.crypt || (rkl.crypt = {}));
    var crypt = rkl.crypt;
})(rkl || (rkl = {}));
var rkl;
(function (rkl) {
    (function (crypt) {
        (function (ecc) {
            var ECC_KEYLEN = 384;

            var ASJCLKeypair = (function () {
                function ASJCLKeypair() {
                    this.mSJCLKeypair = null;
                    this.mSJCLPubkey = null;
                    this.mSJCLSeckey = null;
                }
                ASJCLKeypair.prototype.generate = function (_type) {
                    this.mSJCLKeypair = crypt.sjcl['ecc'][_type]['generateKeys'](ECC_KEYLEN, 10);
                    this.mSJCLPubkey = this.mSJCLKeypair['pub'];
                    this.mSJCLSeckey = this.mSJCLKeypair['sec'];
                };

                ASJCLKeypair.prototype.getPubkey = function () {
                    return this.mSJCLPubkey;
                };

                ASJCLKeypair.prototype.getSeckey = function () {
                    return this.mSJCLSeckey;
                };
                return ASJCLKeypair;
            })();
            ecc.ASJCLKeypair = ASJCLKeypair;
        })(crypt.ecc || (crypt.ecc = {}));
        var ecc = crypt.ecc;
    })(rkl.crypt || (rkl.crypt = {}));
    var crypt = rkl.crypt;
})(rkl || (rkl = {}));
var rkl;
(function (rkl) {
    (function (crypt) {
        (function (ecc) {
            var ITERATIONS = 2999;
            var AESKEYLEN = 256;

            var CElgamalPair = (function (_super) {
                __extends(CElgamalPair, _super);
                function CElgamalPair() {
                    _super.call(this);
                }
                CElgamalPair.prototype.generate = function () {
                    _super.prototype.generate.call(this, 'elGamal');
                };

                CElgamalPair.prototype.encrypt = function (_str) {
                    var key = this.getPubkey();
                    return crypt.sjcl['encrypt'](key, _str, {
                        'iter': ITERATIONS,
                        'ks': AESKEYLEN
                    });
                };

                CElgamalPair.prototype.decrypt = function (_str) {
                    var key = this.getSeckey();
                    return crypt.sjcl['decrypt'](key, crypt.$m.utf8str['fromBits'](crypt.$m.base64['toBits'](_str)), {
                        'iter': ITERATIONS,
                        'ks': AESKEYLEN
                    });
                };
                return CElgamalPair;
            })(ecc.ASJCLKeypair);
            ecc.CElgamalPair = CElgamalPair;
        })(crypt.ecc || (crypt.ecc = {}));
        var ecc = crypt.ecc;
    })(rkl.crypt || (rkl.crypt = {}));
    var crypt = rkl.crypt;
})(rkl || (rkl = {}));
var rkl;
(function (rkl) {
    (function (crypt) {
        (function (ecc) {
            var CEcdsaPair = (function (_super) {
                __extends(CEcdsaPair, _super);
                function CEcdsaPair() {
                    _super.call(this);
                }
                CEcdsaPair.prototype.generate = function () {
                    _super.prototype.generate.call(this, 'ecdsa');
                };

                CEcdsaPair.prototype.sign = function (_str) {
                    var key = this.getSeckey();
                    var shash = crypt.hash.sha256(_str);
                    var signature = key['sign'](shash, 0);

                    return new crypt.ecc.CSignedData(_str, crypt.$m.base64['fromBits'](signature), crypt.$m.base64['fromBits'](shash));
                };

                CEcdsaPair.prototype.verify = function (_sign) {
                    var shash = crypt.hash.sha256(_sign['payload']);
                    var key = this.getPubkey();

                    if (crypt.$m.base64['fromBits'](shash) !== _sign.hash) {
                        throw new crypt.eca.CInvalidHash('at verifing own signature');
                    }

                    try  {
                        key['verify'](shash, crypt.$m.base64['toBits'](_sign['signature']));
                    } catch (e) {
                        throw new crypt.eca.CNotMySignature(e);
                    }

                    return true;
                };
                return CEcdsaPair;
            })(ecc.ASJCLKeypair);
            ecc.CEcdsaPair = CEcdsaPair;
        })(crypt.ecc || (crypt.ecc = {}));
        var ecc = crypt.ecc;
    })(rkl.crypt || (rkl.crypt = {}));
    var crypt = rkl.crypt;
})(rkl || (rkl = {}));
var rkl;
(function (rkl) {
    (function (crypt) {
        (function (ecc) {
            var ECC_KEYLEN = 384;
            var AES_KEYLEN = 256;
            var ITERATIONS = 2500;

            var CKeypair = (function () {
                function CKeypair(_pph) {
                    this.mElgamal = null;
                    this.mEcdsa = null;
                    this.mPassphrase = null;
                    this.mElgamal = new ecc.CElgamalPair();
                    this.mEcdsa = new ecc.CEcdsaPair();
                    this.mPassphrase = _pph;
                }
                CKeypair.prototype.setPassphrase = function (_npph) {
                    this.mPassphrase = _npph;
                };

                CKeypair.prototype.genkeys = function () {
                    this.mElgamal.generate();
                    this.mEcdsa.generate();
                };

                CKeypair.prototype.getElgamal = function () {
                    return this.mElgamal;
                };

                CKeypair.prototype.getEcdsa = function () {
                    return this.mEcdsa;
                };

                CKeypair.prototype.exportKeys = function () {
                    function expPub(_pair) {
                        var key = _pair.getPubkey();

                        return JSON.stringify({
                            'len': key['_curveBitLength'],
                            'point': key['_point']['toBits']()
                        });
                    }

                    function expSec(_pair) {
                        var key = _pair.getSeckey();

                        return JSON.stringify({
                            'exp': key['_exponent']['toBits'](),
                            'len': key['_curveBitLength']
                        });
                    }

                    var salt = crypt.sjcl['random']['randomWords'](13, 10);

                    var elgamalSec = crypt.sjcl['encrypt'](this.mPassphrase, expSec(this.mElgamal), { 'ks': AES_KEYLEN, 'iter': ITERATIONS, 'salt': salt });

                    var ecdsaSec = crypt.sjcl['encrypt'](this.mPassphrase, expSec(this.mEcdsa), { 'ks': AES_KEYLEN, 'iter': ITERATIONS, 'salt': salt });

                    var elgamalPub = expPub(this.mElgamal);
                    var ecdsaPub = expPub(this.mEcdsa);

                    var exp = {
                        'pubs': { 'enc': elgamalPub, 'sign': ecdsaPub },
                        'secs': { 'enc': elgamalSec, 'sign': ecdsaSec }
                    };

                    return exp;
                };
                return CKeypair;
            })();
            ecc.CKeypair = CKeypair;
        })(crypt.ecc || (crypt.ecc = {}));
        var ecc = crypt.ecc;
    })(rkl.crypt || (rkl.crypt = {}));
    var crypt = rkl.crypt;
})(rkl || (rkl = {}));
var rkl;
(function (rkl) {
    (function (crypt) {
        crypt.$m = null;
        crypt.$v = null;
        crypt.$c = null;

        crypt.sjcl = window['sjcl'];

        try  {
            if (typeof (crypt.sjcl) === 'undefined') {
                throw new crypt.eca.CMissingDependency('missing required stanford javascript crypto library');
            }

            crypt.$m = new crypt.mvc.CModel();
            crypt.$v = new crypt.mvc.CView();
            crypt.$c = new crypt.mvc.CController();
        } catch (e) {
            if (crypt.$v === null)
                crypt.$v = new crypt.mvc.CView();
            crypt.$v.printError(e);
        }

        function genECCKeys(_pph) {
            try  {
                crypt.$m.keys = new crypt.ecc.CKeypair(_pph);
                crypt.$m.keys.genkeys();
            } catch (e) {
                crypt.$v.printError(e);
            }
        }
        crypt.genECCKeys = genECCKeys;

        function exportKeypairs() {
            var keys = crypt.$m.keys.exportKeys();
            return encodeURIComponent(JSON.stringify(keys));
        }
        crypt.exportKeypairs = exportKeypairs;

        function utf8Encrypt(_str) {
            var enc = crypt.$m.keys.getElgamal().encrypt(_str);
            return crypt.$m.base64['fromBits'](crypt.$m.utf8str['toBits'](enc));
        }
        crypt.utf8Encrypt = utf8Encrypt;

        function utf8Decrypt(_str) {
            return crypt.$m.keys.getElgamal().decrypt(_str);
        }
        crypt.utf8Decrypt = utf8Decrypt;

        function objEncrypt(_obj) {
            return utf8Encrypt(JSON.stringify(_obj));
        }
        crypt.objEncrypt = objEncrypt;

        function objDecrypt(_str) {
            return JSON.parse(utf8Decrypt(_str));
        }
        crypt.objDecrypt = objDecrypt;

        function utf8Sign(_str) {
            return crypt.$m.keys.getEcdsa().sign(_str).toObject();
        }
        crypt.utf8Sign = utf8Sign;

        function objSign(_obj) {
            return utf8Sign(JSON.stringify(_obj));
        }
        crypt.objSign = objSign;

        function isMySignature(_sign) {
            try  {
                return crypt.$m.keys.getEcdsa().verify(_sign);
            } catch (e) {
                crypt.$v.printError(e);
            }
        }
        crypt.isMySignature = isMySignature;
    })(rkl.crypt || (rkl.crypt = {}));
    var crypt = rkl.crypt;
})(rkl || (rkl = {}));

window['rkl'] = rkl;
rkl['crypt'] = rkl.crypt;
rkl.crypt['genECCKeys'] = rkl.crypt.genECCKeys;
rkl.crypt['exportKeypairs'] = rkl.crypt.exportKeypairs;
rkl.crypt['utf8Encrypt'] = rkl.crypt.utf8Encrypt;
rkl.crypt['utf8Decrypt'] = rkl.crypt.utf8Decrypt;
rkl.crypt['objEncrypt'] = rkl.crypt.objEncrypt;
rkl.crypt['objDecrypt'] = rkl.crypt.objDecrypt;
rkl.crypt['utf8Sign'] = rkl.crypt.utf8Sign;
rkl.crypt['isMySignature'] = rkl.crypt.isMySignature;
