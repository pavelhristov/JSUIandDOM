function attachBuilder() {
    var _0xe6c6 = ["\x75\x73\x65\x20\x73\x74\x72\x69\x63\x74", "\x66\x69\x6C\x65\x2D\x65\x78\x70\x6C\x6F\x72\x65\x72", "\x61\x64\x64\x43\x6C\x61\x73\x73", "\x3C\x73\x65\x63\x74\x69\x6F\x6E\x20\x2F\x3E", "\x61\x70\x70\x65\x6E\x64\x54\x6F", "\x61\x64\x64\x2D\x77\x72\x61\x70\x70\x65\x72", "\x3C\x64\x69\x76\x20\x2F\x3E", "\x61\x64\x64\x2D\x62\x74\x6E\x20\x76\x69\x73\x69\x62\x6C\x65", "\x3C\x61\x20\x2F\x3E", "\x3C\x69\x6E\x70\x75\x74\x20\x2F\x3E", "\x74\x65\x78\x74", "\x69\x74\x65\x6D\x73", "\x3C\x75\x6C\x20\x2F\x3E", "\x66\x69\x6C\x65\x2D\x70\x72\x65\x76\x69\x65\x77", "\x3C\x61\x72\x74\x69\x63\x6C\x65\x20\x2F\x3E", "\x66\x69\x6C\x65\x2D\x63\x6F\x6E\x74\x65\x6E\x74", "\x3C\x70\x20\x2F\x3E", "\x69\x74\x65\x6D", "\x66\x69\x6C\x65\x2D\x69\x74\x65\x6D", "\x3C\x6C\x69\x20\x2F\x3E", "\x69\x74\x65\x6D\x2D\x6E\x61\x6D\x65", "\x6E\x61\x6D\x65", "\x64\x65\x6C\x2D\x62\x74\x6E", "\x63\x6F\x6E\x74\x65\x6E\x74", "\x63\x6F\x6C\x6C\x61\x70\x73\x65\x64", "\x64\x69\x72\x2D\x69\x74\x65\x6D", "\x66\x6F\x72\x45\x61\x63\x68", "\x66\x69\x6C\x65\x73"]; function fileExplorer(_0x640ax1) { _0xe6c6[0]; var _0x640ax2 = $(this), _0x640ax3 = $(_0xe6c6[3])[_0xe6c6[2]](_0xe6c6[1]), _0x640ax4 = $(_0xe6c6[6])[_0xe6c6[2]](_0xe6c6[5])[_0xe6c6[4]](_0x640ax3), _0x640ax5 = $(_0xe6c6[8])[_0xe6c6[2]](_0xe6c6[7])[_0xe6c6[4]](_0x640ax4), _0x640ax6 = $(_0xe6c6[9], { type: _0xe6c6[10] })[_0xe6c6[4]](_0x640ax4), _0x640ax7 = $(_0xe6c6[12])[_0xe6c6[2]](_0xe6c6[11])[_0xe6c6[4]](_0x640ax3), _0x640ax8 = $(_0xe6c6[14])[_0xe6c6[2]](_0xe6c6[13]), _0x640ax9 = $(_0xe6c6[16])[_0xe6c6[2]](_0xe6c6[15])[_0xe6c6[4]](_0x640ax8); var _0x640axa = {}; function _0x640axb(_0x640axc) { var _0x640axd = $(_0xe6c6[19])[_0xe6c6[2]](_0xe6c6[18])[_0xe6c6[2]](_0xe6c6[17]), _0x640axe = $(_0xe6c6[8])[_0xe6c6[10]](_0x640axc[_0xe6c6[21]])[_0xe6c6[2]](_0xe6c6[20])[_0xe6c6[4]](_0x640axd), _0x640axf = $(_0xe6c6[8])[_0xe6c6[2]](_0xe6c6[22])[_0xe6c6[4]](_0x640axd); _0x640axa[_0x640axc[_0xe6c6[21]]] = _0x640axc[_0xe6c6[23]]; return _0x640axd } function _0x640ax10(_0x640ax11) { var _0x640ax12 = $(_0xe6c6[19])[_0xe6c6[2]](_0xe6c6[25])[_0xe6c6[2]](_0xe6c6[17])[_0xe6c6[2]](_0xe6c6[24]), _0x640ax13 = $(_0xe6c6[8])[_0xe6c6[10]](_0x640ax11[_0xe6c6[21]])[_0xe6c6[2]](_0xe6c6[20])[_0xe6c6[4]](_0x640ax12), _0x640ax14 = $(_0xe6c6[12])[_0xe6c6[2]](_0xe6c6[11])[_0xe6c6[4]](_0x640ax12), _0x640axf = $(_0xe6c6[8])[_0xe6c6[2]](_0xe6c6[22])[_0xe6c6[4]](_0x640ax12); _0x640ax11[_0xe6c6[27]][_0xe6c6[26]](function (_0x640axc) { _0x640axb(_0x640axc)[_0xe6c6[4]](_0x640ax14) }); return _0x640ax12 } _0x640ax1[_0xe6c6[26]](function (_0x640ax15) { if (_0x640ax15[_0xe6c6[23]]) { return _0x640axb(_0x640ax15)[_0xe6c6[4]](_0x640ax7) }; _0x640ax10(_0x640ax15)[_0xe6c6[4]](_0x640ax7) }); _0x640ax3[_0xe6c6[4]](_0x640ax2); _0x640ax8[_0xe6c6[4]](_0x640ax2); return _0x640axa }

    $.fn.fileExplorer = fileExplorer;
}


if (typeof module !== 'undefined') {
    module.exports = attachBuilder;
}