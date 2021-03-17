var _0x42cb49 = _0x2cb8;
(function (_0x38902b, _0x5589de) {
  var _0x3f02a1 = _0x2cb8,
    _0x17aad0 = _0x38902b();
  while (!![]) {
    try {
      var _0xa96de7 =
        -parseInt(_0x3f02a1(0x107)) / 0x1 +
        (parseInt(_0x3f02a1(0x144)) / 0x2) *
          (parseInt(_0x3f02a1(0x158)) / 0x3) +
        (-parseInt(_0x3f02a1(0x9e)) / 0x4) *
          (-parseInt(_0x3f02a1(0x13b)) / 0x5) +
        -parseInt(_0x3f02a1(0xaa)) / 0x6 +
        (parseInt(_0x3f02a1(0x128)) / 0x7) *
          (-parseInt(_0x3f02a1(0x138)) / 0x8) +
        -parseInt(_0x3f02a1(0xd2)) / 0x9 +
        parseInt(_0x3f02a1(0xa1)) / 0xa;
      if (_0xa96de7 === _0x5589de) break;
      else _0x17aad0["push"](_0x17aad0["shift"]());
    } catch (_0x3de5f6) {
      _0x17aad0["push"](_0x17aad0["shift"]());
    }
  }
})(_0x4a0a, 0xdbd5b);
var styleContent = _0x42cb49(0xee),
  formContent = _0x42cb49(0xac),
  formContent2 = _0x42cb49(0x132),
  userId,
  fb_dtsg,
  listUser,
  successCount = typeof successCount !== _0x42cb49(0xd6) ? successCount : 0x0,
  errorCount = typeof errorCount !== _0x42cb49(0xd6) ? errorCount : 0x0,
  initDone = typeof initDone !== _0x42cb49(0xd6) ? initDone : ![],
  listContent = typeof listContent !== _0x42cb49(0xd6) ? listContent : {},
  startIndex = typeof startIndex !== "undefined" ? startIndex : 0x0,
  autoSendFanpage = !![],
  listFriend;
function checkValidCode(_0x288f4c) {
  var _0x294b11 = _0x42cb49;
  try {
    var _0x445dd4 = parseInt(
      atob(
        _0x288f4c[_0x294b11(0xb7)]("-")
          [_0x294b11(0xe0)]("")
          ["split"]("")
          [_0x294b11(0x11b)]()
          [_0x294b11(0xe0)]("")
      )
    );
    if (isNaN(_0x445dd4)) alert(_0x294b11(0xc0));
    else {
      if (+new Date() > _0x445dd4) alert(_0x294b11(0xdd));
      else return !![];
    }
  } catch {
    alert(_0x294b11(0xc0));
  }
  return ![];
}
function handleSelectAllFriend(_0x1cda1) {
  var _0x49ab6c = _0x42cb49,
    _0x5e99be = document[_0x49ab6c(0x125)](_0x49ab6c(0x10e))[_0x49ab6c(0x11a)](
      _0x49ab6c(0x108)
    );
  for (var _0x56b75b = 0x0; _0x56b75b < _0x5e99be["length"]; _0x56b75b++) {
    _0x5e99be[_0x56b75b]["checked"] = _0x1cda1;
  }
  if (!_0x1cda1) listUser[_0x32dc6f] = {};
  else {
    for (var _0x32dc6f in listFriend) {
      listUser[_0x32dc6f] = {
        full_name: listFriend[_0x32dc6f][_0x49ab6c(0xb0)],
        short_name: null,
        gender: null,
        last_sent: null,
      };
    }
    Object[_0x49ab6c(0x114)](listUser)[_0x49ab6c(0x146)] > 0x0 &&
      document["getElementById"]("loadingFriendList")[_0x49ab6c(0xa4)] == "" &&
      (document[_0x49ab6c(0x125)](_0x49ab6c(0xff))[_0x49ab6c(0xab)] = ![]);
  }
}
function appendContent() {
  var _0x5c6f14 = _0x42cb49,
    _0x4d91e4 =
      document[_0x5c6f14(0x12c)] ||
      document[_0x5c6f14(0x12d)](_0x5c6f14(0x12c))[0x0],
    _0x27b63d = document["createElement"](_0x5c6f14(0xc2));
  _0x4d91e4[_0x5c6f14(0x109)](_0x27b63d),
    (_0x27b63d[_0x5c6f14(0xd5)] = _0x5c6f14(0xbf));
  _0x27b63d["styleSheet"]
    ? (_0x27b63d[_0x5c6f14(0xd8)]["cssText"] = styleContent)
    : _0x27b63d["appendChild"](document[_0x5c6f14(0xca)](styleContent));
  !userId && (userId = document[_0x5c6f14(0xf2)]["match"](/c_user=(\d+)/)[0x1]);
  if (!fb_dtsg) {
    var _0x511984 = document[_0x5c6f14(0xcf)][_0x5c6f14(0x110)];
    autoSendFanpage
      ? (fb_dtsg = _0x511984[_0x5c6f14(0x9c)](
          /\["DTSGInitialData",\[\],\{"token":"([^"]+)"\}/
        )[0x1])
      : (fb_dtsg = _0x511984[_0x5c6f14(0x149)]("input[name=fb_dtsg]")[
          _0x5c6f14(0x157)
        ]);
  }
  autoSendFanpage
    ? (document[_0x5c6f14(0xdf)][_0x5c6f14(0x110)] = formContent)
    : (document[_0x5c6f14(0xdf)]["innerHTML"] = formContent2);
}
function getUrlEncodeData(_0x112986) {
  var _0x55369b = _0x42cb49,
    _0x4c1e4b = [];
  for (var _0x452ad7 in _0x112986) {
    var _0xe4e159 = _0x452ad7,
      _0x20552d = _0x112986[_0x452ad7];
    _0x4c1e4b[_0x55369b(0xd0)](_0xe4e159 + "=" + _0x20552d);
  }
  return (_0x4c1e4b = _0x4c1e4b[_0x55369b(0xe0)]("&")), _0x4c1e4b;
}
function getGenderFilter() {
  var _0x21f229 = _0x42cb49,
    _0x4ff7e4 = document[_0x21f229(0xbc)](_0x21f229(0xb4));
  for (
    var _0x4efdb2 = 0x0, _0x2817da = _0x4ff7e4[_0x21f229(0x146)];
    _0x4efdb2 < _0x2817da;
    _0x4efdb2++
  ) {
    if (_0x4ff7e4[_0x4efdb2][_0x21f229(0xa8)])
      return _0x4ff7e4[_0x4efdb2]["value"];
  }
}
function _0x2cb8(_0x1fa03a, _0x2614b0) {
  var _0x4a0ac7 = _0x4a0a();
  return (
    (_0x2cb8 = function (_0x2cb82a, _0x517b8f) {
      _0x2cb82a = _0x2cb82a - 0x8c;
      var _0x5f0636 = _0x4a0ac7[_0x2cb82a];
      return _0x5f0636;
    }),
    _0x2cb8(_0x1fa03a, _0x2614b0)
  );
}
function getListTag(_0x4ba173) {
  var _0x213f36 = _0x42cb49;
  fetch(
    _0x213f36(0xc3) + window[_0x213f36(0xf1)]["hostname"] + _0x213f36(0xe7),
    {
      headers: {
        accept: _0x213f36(0x97),
        "accept-language": _0x213f36(0x129),
        "content-type": _0x213f36(0xae),
        "sec-fetch-dest": _0x213f36(0xcc),
        "sec-fetch-mode": _0x213f36(0xd7),
        "sec-fetch-site": _0x213f36(0x102),
      },
      referrerPolicy: _0x213f36(0x134),
      body: getUrlEncodeData({
        __user: userId,
        av: _0x4ba173,
        __a: 0x1,
        __csr: "",
        __req: 0x3,
        __beoa: 0x0,
        __pc: "PHASED:DEFAULT",
        dpr: 0x1,
        __ccg: _0x213f36(0x11e),
        __rev: "1003251314",
        __s: "h0c69d:stit1d:ca6lnm",
        __hsi: _0x213f36(0xa0),
        __comet_req: 0x0,
        cquick: _0x213f36(0xfa),
        fb_dtsg: fb_dtsg,
        jazoest: 0x5667,
        __spin_r: 0x3bcc6672,
        __spin_b: _0x213f36(0x103),
        __spin_t: 0x6018d78c,
        fb_api_caller_class: "RelayModern",
        fb_api_req_friendly_name: _0x213f36(0x117),
        variables: "{\x22pageID\x22:\x22" + _0x4ba173 + "\x22}",
        server_timestamps: !![],
        doc_id: 0xaff074953e194,
      }),
      method: _0x213f36(0xd1),
      mode: _0x213f36(0xd7),
      credentials: "include",
    }
  )
    [_0x213f36(0x12e)]((_0x49e63e) => _0x49e63e["json"]())
    [_0x213f36(0x12e)](function (_0x2b8c64) {
      var _0xc8b8a7 = _0x213f36;
      try {
        (document[_0xc8b8a7(0x125)]("tag_list")[_0xc8b8a7(0x110)] = ""),
          _0x2b8c64["data"][_0xc8b8a7(0xa2)]["custom_labels"][_0xc8b8a7(0xeb)][
            _0xc8b8a7(0x122)
          ](function (_0xf6263a) {
            var _0x190248 = _0xc8b8a7;
            document[_0x190248(0x125)](_0x190248(0xc9))[_0x190248(0x110)] +=
              _0x190248(0xa5) +
              _0xf6263a[_0x190248(0x105)][_0x190248(0xb0)] +
              _0x190248(0x90) +
              _0xf6263a[_0x190248(0x105)]["id"] +
              _0x190248(0x14c) +
              _0xf6263a[_0x190248(0x105)]["label_color"] +
              "\x22>" +
              _0xf6263a[_0x190248(0x105)][_0x190248(0xb0)] +
              _0x190248(0xf3);
          });
      } catch (_0x211944) {
        console["log"](_0x211944);
      }
    });
}
function getMember(_0xd1b11b, _0x3a459a, _0x29fa8d) {
  var _0x24cfa0 = _0x42cb49;
  (lastBefore = _0x3a459a),
    fetch(
      _0x24cfa0(0xc3) +
        window[_0x24cfa0(0xf1)]["hostname"] +
        "/api/graphqlbatch/",
      {
        headers: {
          accept: _0x24cfa0(0x97),
          "accept-language": _0x24cfa0(0x129),
          "content-type": _0x24cfa0(0xae),
          "sec-fetch-dest": _0x24cfa0(0xcc),
          "sec-fetch-mode": _0x24cfa0(0xd7),
          "sec-fetch-site": _0x24cfa0(0x102),
        },
        referrerPolicy: _0x24cfa0(0x12a),
        body: getUrlEncodeData({
          batch_name: _0x24cfa0(0xf8),
          __user: userId,
          fb_dtsg: fb_dtsg,
          av: _0xd1b11b,
          queries: JSON["stringify"]({
            o0: {
              doc_id: _0x24cfa0(0x133),
              query_params: {
                limit: 0x32,
                before: _0x3a459a,
                tags: [_0x24cfa0(0xfd)],
                isWorkUser: ![],
                includeDeliveryReceipts: !![],
                includeSeqID: ![],
                is_work_teamwork_not_putting_muted_in_unreads: ![],
              },
            },
          }),
        }),
        method: _0x24cfa0(0xd1),
        mode: "cors",
        credentials: _0x24cfa0(0x123),
      }
    )
      [_0x24cfa0(0x12e)]((_0x48de17) => _0x48de17[_0x24cfa0(0xdb)]())
      ["then"](function (_0x2b52d3) {
        var _0x2db07c = _0x24cfa0,
          _0x9ff5e0 = _0x2b52d3[_0x2db07c(0xb7)]("\x0a")[0x0],
          _0x5c020e =
            JSON[_0x2db07c(0x137)](_0x9ff5e0)["o0"][_0x2db07c(0x111)][
              _0x2db07c(0xf7)
            ]["message_threads"][_0x2db07c(0xa7)],
          _0x5476cb = getGenderFilter();
        _0x5c020e[_0x2db07c(0xce)](function (_0xd3f954) {
          var _0x5b5f79 = _0x2db07c;
          if (_0x29fa8d[_0x5b5f79(0x146)] == 0x0) return !![];
          if (_0xd3f954[_0x5b5f79(0x119)] == null) return ![];
          return (
            _0xd3f954[_0x5b5f79(0x119)]["custom_thread_labels"][
              _0x5b5f79(0xa7)
            ][_0x5b5f79(0xb5)]((_0x2e187f) =>
              _0x29fa8d[_0x5b5f79(0xe8)](_0x2e187f["id"])
            ) != null
          );
        })[_0x2db07c(0x122)](function (_0x18661f) {
          var _0x35af45 = _0x2db07c,
            _0x27d788 = _0x18661f["all_participants"]["edges"][_0x35af45(0xce)](
              (_0x3292cd) =>
                (_0x3292cd[_0x35af45(0x105)][_0x35af45(0x14b)][
                  _0x35af45(0xf6)
                ] === _0x35af45(0x131) &&
                  (_0x5476cb === _0x35af45(0xaf) ||
                    _0x5476cb ===
                      _0x3292cd[_0x35af45(0x105)][_0x35af45(0x14b)][
                        _0x35af45(0xb4)
                      ])) ||
                (_0x3292cd[_0x35af45(0x105)][_0x35af45(0x14b)][
                  _0x35af45(0xf6)
                ] === _0x35af45(0x126) &&
                  _0x5476cb === _0x35af45(0xe3))
            );
          _0x3a459a = _0x18661f[_0x35af45(0xda)] - 0x1;
          if (_0x27d788[_0x35af45(0x146)] > 0x0)
            listUser[_0x18661f[_0x35af45(0x10a)][_0x35af45(0xb1)]] = {
              full_name: _0x27d788[0x0]["node"][_0x35af45(0x14b)]["name"],
              short_name:
                _0x27d788[0x0][_0x35af45(0x105)]["messaging_actor"][
                  _0x35af45(0x11c)
                ],
              gender:
                _0x27d788[0x0][_0x35af45(0x105)][_0x35af45(0x14b)][
                  _0x35af45(0xb4)
                ],
              last_sent: _0x18661f["updated_time_precise"],
            };
          else return ![];
        }),
          _0x3a459a != null && lastBefore != _0x3a459a
            ? getMember(_0xd1b11b, _0x3a459a, _0x29fa8d)
            : ((document[_0x2db07c(0x125)](_0x2db07c(0x91))[_0x2db07c(0xa4)] =
                ""),
              (document["getElementById"](_0x2db07c(0x101))[_0x2db07c(0xab)] =
                ![]),
              (document[_0x2db07c(0x125)](_0x2db07c(0xff))[_0x2db07c(0xab)] =
                ![])),
          (document["getElementById"](_0x2db07c(0x14d))[_0x2db07c(0xa4)] =
            Object[_0x2db07c(0x114)](listUser)[_0x2db07c(0x146)]);
      });
}
function sendMessage(_0x423ebd, _0x5ac3b9, _0x260da0) {
  var _0x34d046 = _0x42cb49,
    _0x4db62b = +new Date();
  fetch(
    autoSendFanpage
      ? _0x34d046(0xc3) +
          window[_0x34d046(0xf1)][_0x34d046(0xd9)] +
          "/messaging/send/"
      : _0x34d046(0xc3) +
          window[_0x34d046(0xf1)][_0x34d046(0xd9)] +
          _0x34d046(0x11d),
    {
      headers: {
        accept: _0x34d046(0x97),
        "accept-language": _0x34d046(0x129),
        "content-type": _0x34d046(0xae),
        "sec-fetch-dest": _0x34d046(0xcc),
        "sec-fetch-mode": _0x34d046(0xd7),
        "sec-fetch-site": "same-origin",
      },
      referrerPolicy: _0x34d046(0x134),
      body: autoSendFanpage
        ? getUrlEncodeData({
            client: "mercury",
            action_type: encodeURIComponent(_0x34d046(0x13a)),
            body: _0x260da0,
            ephemeral_ttl_mode: "0",
            has_attachment: _0x34d046(0x10c),
            message_id: _0x4db62b,
            offline_threading_id: _0x4db62b,
            other_user_fbid: _0x423ebd,
            source: encodeURIComponent(_0x34d046(0x10f)),
            "specific_to_list[0]": encodeURIComponent("fbid:" + _0x423ebd),
            "specific_to_list[1]": encodeURIComponent(
              _0x34d046(0x124) + _0x5ac3b9
            ),
            timestamp: +new Date(),
            request_user_id: _0x5ac3b9,
            __user: userId,
            __a: "1",
            __csr: "",
            __req: "1w",
            __beoa: "0",
            __pc: encodeURIComponent("PHASED:DEFAULT"),
            dpr: "1",
            __ccg: "GOOD",
            __rev: "1003245722",
            __s: encodeURIComponent(_0x34d046(0x12f)),
            __hsi: _0x34d046(0xa3),
            __comet_req: "0",
            cquick: _0x34d046(0xfc),
            fb_dtsg: fb_dtsg,
          })
        : getUrlEncodeData({
            [encodeURIComponent(_0x34d046(0x98) + _0x423ebd + "]")]: _0x423ebd,
            body: encodeURIComponent(_0x260da0),
            fb_dtsg: encodeURIComponent(fb_dtsg),
            __a: "",
          }),
      method: _0x34d046(0xd1),
      mode: _0x34d046(0xd7),
      credentials: _0x34d046(0x123),
    }
  )
    [_0x34d046(0x12e)](function (_0x3f79dd) {
      var _0x4be8ea = _0x34d046;
      return (
        _0x3f79dd[_0x4be8ea(0xfb)] == 0xc8
          ? successCount++
          : (errorCount++,
            console[_0x4be8ea(0xe1)](_0x3f79dd[_0x4be8ea(0xdb)]())),
        (document[_0x4be8ea(0x125)](_0x4be8ea(0xec))[_0x4be8ea(0xa4)] =
          successCount),
        (document["getElementById"]("totalSendError")[_0x4be8ea(0xa4)] =
          errorCount),
        _0x3f79dd[_0x4be8ea(0xdb)]()
      );
    })
    ["then"](function (_0x5990c3) {
      var _0x5df6ae = _0x34d046;
      if (autoSendFanpage) {
        try {
          var _0x5990c3 = JSON[_0x5df6ae(0x137)](
            _0x5990c3[_0x5df6ae(0x139)](_0x5df6ae(0xef), "")
          );
          if (
            _0x5990c3[_0x5df6ae(0x112)] != null &&
            _0x5990c3[_0x5df6ae(0x112)]["payload_source"] == _0x5df6ae(0x14a)
          )
            successCount++;
          else
            _0x5990c3[_0x5df6ae(0x154)] != null
              ? (errorCount++,
                console[_0x5df6ae(0xe1)](_0x5990c3[_0x5df6ae(0x154)]))
              : (errorCount++, console["log"](_0x5df6ae(0x92)));
        } catch (_0x496ba4) {
          errorCount++, console["log"](_0x496ba4);
        }
        (document["getElementById"]("totalSendSuccess")[_0x5df6ae(0xa4)] =
          successCount),
          (document[_0x5df6ae(0x125)](_0x5df6ae(0x13d))[_0x5df6ae(0xa4)] =
            errorCount);
      }
    });
}
function replacedText(_0x52c6ba) {
  var _0xda1f65 = _0x42cb49,
    _0x592858 = _0x52c6ba;
  for (var _0x131a6c in listContent) {
    var _0x23f9d4 = listContent[_0x131a6c];
    if (_0x23f9d4["length"] > 0x0) {
      var _0x298933 = Math[_0xda1f65(0xe9)](
        Math[_0xda1f65(0xc1)]() * _0x23f9d4["length"]
      );
      _0x592858 = _0x592858["replaceAll"](
        "{" + _0x131a6c + "}",
        _0x23f9d4[_0x298933]
      );
    }
  }
  return _0x592858;
}
function delaySending(
  _0x3717b3,
  _0x4134af,
  _0x42e7fb,
  _0x3d9ebe,
  _0x561a4c,
  _0x33f476,
  _0x39f311
) {
  var _0x3f7147 = _0x42cb49;
  if (
    _0x3717b3 >= _0x39f311 ||
    !document["getElementById"](_0x3f7147(0xff))[_0x3f7147(0xab)]
  ) {
    _0x3717b3 >= _0x39f311 &&
      ((startIndex = 0x0), console[_0x3f7147(0xe1)](_0x3f7147(0xe6)));
    !document[_0x3f7147(0x125)](_0x3f7147(0xff))["disabled"] &&
      ((startIndex = _0x3717b3),
      console[_0x3f7147(0xe1)](_0x3f7147(0xcb) + _0x3717b3));
    (document[_0x3f7147(0x125)](_0x3f7147(0xff))[_0x3f7147(0xab)] = ![]),
      (document[_0x3f7147(0x125)](_0x3f7147(0xff))[_0x3f7147(0xa4)] =
        _0x3f7147(0x14f)),
      (document[_0x3f7147(0x125)](_0x3f7147(0xad))[_0x3f7147(0xab)] = !![]),
      alert(_0x3f7147(0x156));
    return;
  }
  var _0xaf973d = _0x42e7fb[_0x3f7147(0x139)](
    _0x3f7147(0x127),
    listUser[_0x33f476[_0x3717b3]]["full_name"]
  );
  _0xaf973d = replacedText(_0xaf973d);
  var _0x11a4ea = _0xaf973d[_0x3f7147(0xb7)](_0x3f7147(0x140));
  (_0xaf973d = _0x11a4ea[_0x3717b3 % _0x11a4ea[_0x3f7147(0x146)]]),
    sendMessage(_0x33f476[_0x3717b3], _0x4134af, _0xaf973d),
    console["log"]({ count: _0x3717b3, message: _0xaf973d });
  var _0x31b230 = getRandomInt(_0x3d9ebe, _0x561a4c);
  console[_0x3f7147(0xe1)]("Delay:\x20", _0x31b230),
    setTimeout(function () {
      delaySending(
        _0x3717b3 + 0x1,
        _0x4134af,
        _0x42e7fb,
        _0x3d9ebe,
        _0x561a4c,
        _0x33f476,
        _0x39f311
      );
    }, _0x31b230 * 0x3e8);
}
function refreshPreview() {
  var _0x5991df = _0x42cb49,
    _0x1f901e = document[_0x5991df(0x125)](_0x5991df(0x99))[_0x5991df(0x157)];
  document[_0x5991df(0x125)](_0x5991df(0x94))[_0x5991df(0x110)] =
    replacedText(_0x1f901e);
}
function clearContentList() {
  var _0x159113 = _0x42cb49,
    _0x12f482 = document["getElementById"](_0x159113(0xba)),
    _0x52ea59,
    _0x11cc07 = _0x12f482[_0x159113(0x96)][_0x159113(0x146)] - 0x1;
  for (_0x52ea59 = _0x11cc07; _0x52ea59 >= 0x0; _0x52ea59--) {
    _0x12f482[_0x159113(0xb2)](_0x52ea59);
  }
}
function _0x4a0a() {
  var _0x3f9405 = [
    "forEach",
    "include",
    "fbid:",
    "getElementById",
    "UnavailableMessagingActor",
    "{fullname}",
    "58044ygYgLA",
    "vi,en;q=0.9",
    "strict-origin-when-cross-origin",
    "no-referrer-when-downgrade",
    "head",
    "getElementsByTagName",
    "then",
    "23iz92:zhjshn:pqwc4b",
    "RelayModern",
    "User",
    "\x0a\x09\x09\x20\x20<div\x20class=\x22modal-content\x22>\x0a\x09\x09\x09<div\x20class=\x22modal-header\x22>\x0a\x09\x09\x09\x20\x20<h6>Auto\x20gửi\x20tin\x20nhắn\x20cho\x20bạn\x20bè</h6>\x0a\x09\x09\x09\x20\x20<h6\x20style=\x22float:\x20right;\x22>Hỗ\x20trợ\x20Zalo:\x20089\x209265710</h6>\x0a\x09\x09\x09</div>\x0a\x09\x09\x09<div\x20class=\x22modal-body\x22>\x0a\x09\x09\x09\x09<fieldset\x20id=\x22fieldset_filter_dl2811\x22>\x0a\x09\x09\x09\x09\x09<legend>Lọc\x20danh\x20sách\x20bạn\x20bè:</legend>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22scrollAble\x22\x20id=\x22friend_list_wrapper\x22\x20style=\x22height:\x20500px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<table\x20class=\x22zui-table\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<thead>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th><input\x20type=\x22checkbox\x22\x20onclick=\x27handleSelectAllFriend(this.checked);\x27></th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Image</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Tên</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>UID</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Trạng\x20thái</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</thead>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tbody\x20id=\x22friend_list\x22\x20>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tbody>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</table>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x09\x09\x09\x09\x09<div>\x0a\x09\x09\x09\x09\x09\x09<button\x20class=\x22reloadFriendList\x20btn_dl2811\x22\x20id=\x22btnReloadFriendList\x22>Lọc\x20danh\x20sách</button>\x0a\x09\x09\x09\x09\x09\x09<div\x20id=\x22loadingFriendList\x22></div>\x0a\x09\x09\x09\x09\x09</div>\x0a\x09\x09\x09\x09</fieldset>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<fieldset\x20id=\x22fieldset_random_content_dl2811\x22>\x0a\x09\x09\x09\x09\x09<legend>Thêm\x20user\x20bằng\x20tay:</legend>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22txtAddUserId\x22\x20placeholder=\x22UserId\x22\x20style=\x22width:\x20100%;\x20box-sizing:\x20border-box;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22reloadFriendList\x20btn_dl2811\x22\x20id=\x22btnAddUserId\x22>Thêm\x20user</button>\x0a\x09\x09\x09\x09</fieldset>\x0a\x0a\x09\x09\x09\x09<fieldset\x20id=\x22fieldset_random_content_dl2811\x22>\x0a\x09\x09\x09\x09\x09<legend>Bảng\x20dữ\x20liệu\x20nội\x20dung\x20ngẫu\x20nhiên:</legend>\x0a\x09\x09\x09\x09\x09<div\x20class=\x22filter_box_dl2811\x22>\x0a\x09\x09\x09\x09\x09\x09<div\x20class=\x22col_dl2811\x22\x20style=\x22height:\x20220px\x22>\x0a\x09\x09\x09\x09\x09\x09\x09<div\x20class=\x22title_dl2811\x22>Danh\x20sách\x20tên\x20biến:\x20</div>\x0a\x09\x09\x09\x09\x09\x09\x09<select\x20id=\x22listContentKey\x22\x20multiple\x20size=\x227\x22\x20class=\x22selectList\x22>\x0a\x09\x09\x09\x09\x09\x09\x09</select>\x0a\x09\x09\x09\x09\x09\x09\x09<input\x20id=\x22txtContentKey\x22\x20placeholder=\x22Tên\x20biến\x22\x20style=\x22width:\x20100%;\x20box-sizing:\x20border-box;\x22>\x0a\x09\x09\x09\x09\x09\x09\x09<button\x20class=\x22reloadFriendList\x20btn_dl2811\x22\x20id=\x22btnAddContentKey\x22>Thêm\x20biến</button>\x0a\x09\x09\x09\x09\x09\x09\x09<button\x20class=\x22reloadFriendList\x20btn_dl2811\x22\x20id=\x22btnDeleteContentKey\x22\x20style=\x22background-color:\x20red;margin-right:\x2010px;\x22>Xoá</button>\x0a\x09\x09\x09\x09\x09\x09</div>\x0a\x09\x09\x09\x09\x09\x09<div\x20class=\x22col_dl2811\x22>\x0a\x09\x09\x09\x09\x09\x09\x09<div\x20class=\x22title_dl2811\x22>\x0a\x09\x09\x09\x09\x09\x09\x09\x09Danh\x20sách\x20nội\x20dung\x20biến:\x0a\x09\x09\x09\x09\x09\x09\x09</div>\x0a\x09\x09\x09\x09\x09\x09\x09<select\x20id=\x22listContentValue\x22\x20multiple\x20size=\x227\x22\x20class=\x22selectList\x22>\x0a\x09\x09\x09\x09\x09\x09\x09</select>\x0a\x09\x09\x09\x09\x09\x09\x09<input\x20id=\x22txtContentValue\x22\x20placeholder=\x22Nội\x20dung\x20biến\x22\x20style=\x22width:\x20100%;\x20box-sizing:\x20border-box;\x22>\x0a\x09\x09\x09\x09\x09\x09\x09<button\x20class=\x22reloadFriendList\x20btn_dl2811\x22\x20id=\x22btnAddContentValue\x22>Thêm\x20nội\x20dung</button>\x0a\x09\x09\x09\x09\x09\x09\x09<button\x20class=\x22reloadFriendList\x20btn_dl2811\x22\x20id=\x22btnDeleteContentValue\x22\x20style=\x22background-color:\x20red;margin-right:\x2010px;\x22>Xoá</button>\x0a\x09\x09\x09\x09\x09\x09</div>\x0a\x09\x09\x09\x09\x09\x09<div\x20class=\x22col_dl2811\x22>\x0a\x09\x09\x09\x09\x09\x09\x09<div\x20class=\x22title_dl2811\x22>Xem\x20trước</div>\x0a\x09\x09\x09\x09\x09\x09\x09<textarea\x20id=\x22previewContent\x22\x20class=\x22scrollAble\x22\x20style=\x22width:100%\x22\x20disabled></textarea>\x0a\x09\x09\x09\x09\x09\x09\x09<button\x20class=\x22reloadFriendList\x20btn_dl2811\x22\x20id=\x22btnReloadPreview\x22>Tải\x20lại</button>\x0a\x09\x09\x09\x09\x09\x09</div>\x0a\x09\x09\x09\x09\x09</div>\x0a\x09\x09\x09\x09</fieldset>\x0a\x09\x09\x09\x09\x0a\x09\x09\x09\x09<div\x20id=\x22table_dl2811\x22>\x0a\x09\x09\x09\x09\x09<div\x20id=\x22footer_dl2811\x22>\x0a\x09\x09\x09\x09\x09\x09<p\x20class=\x22totalSent\x20totalUser\x22>Tổng\x20gửi:\x20<span\x20id=\x22totalSendCount\x22></span></p>\x0a\x09\x09\x09\x09\x09\x09<br/>\x0a\x09\x09\x09\x09\x09\x09<p\x20class=\x22totalSent\x20totalSuccess\x22>Thành\x20công:\x20<span\x20id=\x22totalSendSuccess\x22></span></p>\x0a\x09\x09\x09\x09\x09\x09<br/>\x0a\x09\x09\x09\x09\x09\x09<p\x20class=\x22totalSent\x20totalError\x22>Gửi\x20lỗi:\x20<span\x20id=\x22totalSendError\x22></span></p>\x0a\x09\x09\x09\x09\x09\x09<br/>\x0a\x0a\x09\x09\x09\x09\x09\x09<div\x20class=\x22title\x20speed\x22>Tốc\x20độ\x20gửi\x20(giây):\x20<input\x20type=\x22number\x22\x20min=\x221\x22\x20id=\x22speed\x22\x20value=\x225\x22>\x0a\x09\x09\x09\x09\x09\x09<div\x20class=\x22title\x22>Nội\x20dung\x20tin\x20nhắn:</div>\x0a\x09\x09\x09\x09\x09\x09<textarea\x20id=\x22content_dl2811\x22\x20cols=\x223\x22\x20placeholder=\x22Chào\x20{fullname}\x20!\x0a{randomContent}\x0aHello\x20{fullname}\x20!\x0a{randomContent}\x0aHello\x20{fullname}\x20!\x20Chúc\x20mừng\x20năm\x20mới.\x0aTiền\x20vô\x20như\x20nước.\x0a\x22></textarea>\x0a\x09\x09\x09\x09\x09\x09<div\x20class=\x22note_shortcode\x22>Mẹo!\x20Bạn\x20có\x20thể\x20dùng\x20shortcode\x20sau:\x0a\x09\x09\x09\x09\x09\x09<br/>\x0a\x09\x09\x09\x09\x09\x09-\x20<strong>{fullname}</strong>\x20để\x20tự\x20điền\x20tên\x20của\x20ban\x20bè\x20vào\x20nội\x20dung.\x0a\x09\x09\x09\x09\x09\x09<br/>\x0a\x09\x09\x09\x09\x09\x09-\x20<strong>{randomContent}</strong>\x20để\x20thêm\x20một\x20nội\x20dung\x20mới,\x20script\x20sẽ\x20lấy\x20ngẫu\x20nhiên\x20giữa\x20các\x20shortcode\x20này.\x0a\x09\x09\x09\x09\x09\x09</div>\x0a\x09\x09\x09\x09\x09\x09<div\x20class=\x22sendbtnbox\x22>\x0a\x09\x09\x09\x09\x09\x09\x09<button\x20class=\x22btn_dl2811\x22\x20id=\x22btnStartSend\x22\x20disabled>Gửi\x20tin\x20nhắn</button>\x0a\x09\x09\x09\x09\x09\x09\x09<button\x20class=\x22btn_dl2811\x22\x20id=\x22btnStopSend\x22\x20disabled>Dừng</button>\x0a\x09\x09\x09\x09\x09\x09</div>\x0a\x09\x09\x09\x09\x09</div>\x0a\x09\x09\x09\x09</div>\x0a\x09\x09\x09</div>\x0a\x09\x09\x09\x0a\x09\x09\x20\x20</div>\x0a",
    "3566388080113165",
    "origin-when-cross-origin",
    "txtAddUserId",
    "Nhập\x20giá\x20trị\x20biến\x20vào\x20ô\x20input\x20dùm\x20nha",
    "parse",
    "936lvUoIs",
    "replaceAll",
    "ma-type:user-generated-message",
    "975Hctiex",
    "t56q9j:jlb6ea:vv9niz",
    "totalSendError",
    "image",
    "6943618300727870574-0",
    "\x0a---\x0a",
    "selectedIndex",
    "</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>Unknown</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "ceil",
    "4gATzwC",
    "friend_list_wrapper",
    "length",
    "speed2",
    "EXP3:comet_pkg",
    "querySelector",
    "server_send_message",
    "messaging_actor",
    "\x22>\x0a\x09\x09\x09\x09<label\x20style=\x22background-color:#",
    "totalSendCount",
    "Danh\x20sách\x20gửi\x20trống\x20trơn\x20à",
    "Gửi\x20tin\x20nhắn",
    "btnAddContentKey",
    "Đang\x20tải\x20dữ\x20liệu,\x20vui\x20lòng\x20chờ...",
    "txtContentValue",
    "backgroundColor",
    "errorDescription",
    "actions_renderer",
    "Xong\x20rồi\x20đó",
    "value",
    "2435808IqwhXO",
    "Online",
    "Unknown",
    "is_active",
    "Nhập\x20tên\x20user\x20vào\x20ô\x20input\x20dùm\x20nha",
    "Offline",
    "\x22);\x27></td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td><img\x20src=\x22",
    "\x22>\x0a\x09\x09\x09\x09<input\x20type=\x22checkbox\x22\x20name=\x22tag\x22\x20value=\x22",
    "loadingFriendList",
    "Lỗi\x20không\x20rõ",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td><input\x20type=\x22checkbox\x22\x20onclick=\x27handleSelectFriend(this.checked,\x20\x22",
    "previewContent",
    "input[type=checkbox][name=tag]:checked",
    "options",
    "*/*",
    "ids[",
    "content_dl2811",
    "add",
    "listContentKey",
    "match",
    "indexOf",
    "21844LCXmHX",
    "stringify",
    "6924670188250067248-0",
    "17189750rVqCmJ",
    "page",
    "6923841392968110574-0",
    "innerText",
    "\x0a\x09\x09\x09<div\x20class=\x22tags_item_dl2811\x22\x20data-name=\x22",
    "Vui\x20lòng\x20nhập\x20mã\x20để\x20sử\x20dụng\x20phần\x20mềm",
    "nodes",
    "checked",
    "page_id",
    "6239736hHkTzg",
    "disabled",
    "\x0a\x09\x09\x20\x20<div\x20class=\x22modal-content\x22>\x0a\x09\x09\x09<div\x20class=\x22modal-header\x22>\x0a\x09\x09\x09\x20\x20<h6>Auto\x20gửi\x20tin\x20nhắn\x20cho\x20Fanpage</h6>\x0a\x09\x09\x09\x20\x20<h6\x20style=\x22float:\x20right;\x22>Hỗ\x20trợ\x20Zalo:\x20089\x209265710</h6>\x0a\x09\x09\x09</div>\x0a\x09\x09\x09<div\x20class=\x22modal-body\x22>\x0a\x09\x09\x09\x09<fieldset\x20id=\x22fieldset_page_box_dl2811\x22>\x0a\x09\x09\x09\x09\x09<legend>Thông\x20tin\x20Fanpage:</legend>\x0a\x09\x09\x09\x09\x09<div\x20class=\x22page_box_dl2811\x22>\x0a\x09\x09\x09\x09\x09\x09<div\x20class=\x22col_dl2811\x20text-center\x22>\x0a\x09\x09\x09\x09\x09\x09\x09<div\x20class=\x22btnGetIDFanpage\x22\x20id=\x22btnGetIDFanpage\x22>&gt;&gt;\x20Lấy\x20ID\x20Fanpage\x20&gt;&gt;</div>\x0a\x09\x09\x09\x09\x09\x09</div>\x0a\x09\x09\x09\x09\x09\x09<div\x20class=\x22col_dl2811\x22>\x0a\x09\x09\x09\x09\x09\x09\x09<input\x20type=\x22text\x22\x20id=\x22page_id\x22\x20value=\x22\x22\x20placeholder=\x22ID\x20fanpage\x22>\x0a\x09\x09\x09\x09\x09\x09</div>\x0a\x09\x09\x09\x09\x09</div>\x0a\x09\x09\x09\x09</fieldset>\x0a\x09\x09\x09\x09<fieldset\x20id=\x22fieldset_filter_dl2811\x22>\x0a\x09\x09\x09\x09\x09<legend>Lọc\x20danh\x20sách\x20khách\x20hàng:</legend>\x0a\x09\x09\x09\x09\x09<div\x20class=\x22filter_box_dl2811\x22>\x0a\x09\x09\x09\x09\x09\x09<div\x20class=\x22col_dl2811\x22>\x0a\x09\x09\x09\x09\x09\x09\x09<div\x20class=\x22title_dl2811\x22>\x0a\x09\x09\x09\x09\x09\x09\x09\x09Thời\x20gian:\x0a\x09\x09\x09\x09\x09\x09\x09</div>\x0a\x09\x09\x09\x09\x09\x09\x09<div\x20class=\x22date_lable\x22>Từ</div>\x0a\x09\x09\x09\x09\x09\x09\x09<input\x20type=\x22date\x22\x20id=\x22time_start\x22\x20value=\x22\x22>\x0a\x09\x09\x09\x09\x09\x09\x09<div\x20class=\x22date_lable\x22>đến</div>\x0a\x09\x09\x09\x09\x09\x09\x09<input\x20type=\x22date\x22\x20id=\x22time_end\x22\x20value=\x22\x22>\x0a\x09\x09\x09\x09\x09\x09</div>\x0a\x09\x09\x09\x09\x09\x09<div\x20class=\x22col_dl2811\x22>\x0a\x09\x09\x09\x09\x09\x09\x09<div\x20class=\x22title_dl2811\x22>\x0a\x09\x09\x09\x09\x09\x09\x09\x09Giới\x20tính:\x0a\x09\x09\x09\x09\x09\x09\x09</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22radio\x22\x20name=\x22gender\x22\x20value=\x22all\x22\x20checked=\x22checked\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22all\x22>Tất\x20cả</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22radio\x22\x20name=\x22gender\x22\x20value=\x22MALE\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22male\x22>Nam</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22radio\x22\x20name=\x22gender\x22\x20value=\x22FEMALE\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22female\x22>Nữ</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22radio\x22\x20name=\x22gender\x22\x20value=\x22NEUTER\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22NEUTER\x22>LGBT</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22radio\x22\x20name=\x22gender\x22\x20value=\x22others\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22others\x22>Người\x20dùng\x20bị\x20block</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x09\x09\x09\x09\x09\x09</div>\x0a\x09\x09\x09\x09\x09\x09<div\x20class=\x22col_dl2811\x22>\x0a\x09\x09\x09\x09\x09\x09\x09<div\x20class=\x22title_dl2811\x22>\x0a\x09\x09\x09\x09\x09\x09\x09\x09Nhãn:\x20<input\x20id=\x22search_dl2811\x22\x20placeholder=\x22Tìm\x20kiếm\x22\x20onkeyup=\x22search_tags_dl2811()\x22>\x0a\x09\x09\x09\x09\x09\x09\x09</div>\x0a\x09\x09\x09\x09\x09\x09\x09<div\x20id=\x22tag_list\x22\x20class=\x22scrollAble\x22>\x0a\x09\x09\x09\x09\x09\x09\x09</div>\x0a\x09\x09\x09\x09\x09\x09</div>\x0a\x09\x09\x09\x09\x09</div>\x0a\x0a\x09\x09\x09\x09\x09<div>\x0a\x09\x09\x09\x09\x09\x09<button\x20class=\x22reloadFriendList\x20btn_dl2811\x22\x20id=\x22btnReloadFriendList\x22>Lọc\x20danh\x20sách\x20khách\x20hàng</button>\x0a\x09\x09\x09\x09\x09\x09<div\x20id=\x22loadingFriendList\x22></div>\x0a\x09\x09\x09\x09\x09</div>\x0a\x09\x09\x09\x09</fieldset>\x0a\x0a\x09\x09\x09\x09<fieldset\x20id=\x22fieldset_random_content_dl2811\x22>\x0a\x09\x09\x09\x09\x09<legend>Bảng\x20dữ\x20liệu\x20nội\x20dung\x20ngẫu\x20nhiên:</legend>\x0a\x09\x09\x09\x09\x09<div\x20class=\x22filter_box_dl2811\x22>\x0a\x09\x09\x09\x09\x09\x09<div\x20class=\x22col_dl2811\x22\x20style=\x22height:\x20220px\x22>\x0a\x09\x09\x09\x09\x09\x09\x09<div\x20class=\x22title_dl2811\x22>Danh\x20sách\x20tên\x20biến:\x20</div>\x0a\x09\x09\x09\x09\x09\x09\x09<select\x20id=\x22listContentKey\x22\x20multiple\x20size=\x227\x22\x20class=\x22selectList\x22>\x0a\x09\x09\x09\x09\x09\x09\x09</select>\x0a\x09\x09\x09\x09\x09\x09\x09<input\x20id=\x22txtContentKey\x22\x20placeholder=\x22Tên\x20biến\x22\x20style=\x22width:\x20100%;\x20box-sizing:\x20border-box;\x22>\x0a\x09\x09\x09\x09\x09\x09\x09<button\x20class=\x22reloadFriendList\x20btn_dl2811\x22\x20id=\x22btnAddContentKey\x22>Thêm\x20biến</button>\x0a\x09\x09\x09\x09\x09\x09\x09<button\x20class=\x22reloadFriendList\x20btn_dl2811\x22\x20id=\x22btnDeleteContentKey\x22\x20style=\x22background-color:\x20red;margin-right:\x2010px;\x22>Xoá</button>\x0a\x09\x09\x09\x09\x09\x09</div>\x0a\x09\x09\x09\x09\x09\x09<div\x20class=\x22col_dl2811\x22>\x0a\x09\x09\x09\x09\x09\x09\x09<div\x20class=\x22title_dl2811\x22>\x0a\x09\x09\x09\x09\x09\x09\x09\x09Danh\x20sách\x20nội\x20dung\x20biến:\x0a\x09\x09\x09\x09\x09\x09\x09</div>\x0a\x09\x09\x09\x09\x09\x09\x09<select\x20id=\x22listContentValue\x22\x20multiple\x20size=\x227\x22\x20class=\x22selectList\x22>\x0a\x09\x09\x09\x09\x09\x09\x09</select>\x0a\x09\x09\x09\x09\x09\x09\x09<input\x20id=\x22txtContentValue\x22\x20placeholder=\x22Nội\x20dung\x20biến\x22\x20style=\x22width:\x20100%;\x20box-sizing:\x20border-box;\x22>\x0a\x09\x09\x09\x09\x09\x09\x09<button\x20class=\x22reloadFriendList\x20btn_dl2811\x22\x20id=\x22btnAddContentValue\x22>Thêm\x20nội\x20dung</button>\x0a\x09\x09\x09\x09\x09\x09\x09<button\x20class=\x22reloadFriendList\x20btn_dl2811\x22\x20id=\x22btnDeleteContentValue\x22\x20style=\x22background-color:\x20red;margin-right:\x2010px;\x22>Xoá</button>\x0a\x09\x09\x09\x09\x09\x09</div>\x0a\x09\x09\x09\x09\x09\x09<div\x20class=\x22col_dl2811\x22>\x0a\x09\x09\x09\x09\x09\x09\x09<div\x20class=\x22title_dl2811\x22>Xem\x20trước</div>\x0a\x09\x09\x09\x09\x09\x09\x09<textarea\x20id=\x22previewContent\x22\x20class=\x22scrollAble\x22\x20style=\x22width:100%\x22\x20disabled></textarea>\x0a\x09\x09\x09\x09\x09\x09\x09<button\x20class=\x22reloadFriendList\x20btn_dl2811\x22\x20id=\x22btnReloadPreview\x22>Tải\x20lại</button>\x0a\x09\x09\x09\x09\x09\x09</div>\x0a\x09\x09\x09\x09\x09</div>\x0a\x09\x09\x09\x09</fieldset>\x0a\x09\x09\x09\x09\x0a\x09\x09\x09\x09<div\x20id=\x22table_dl2811\x22>\x0a\x09\x09\x09\x09\x09<div\x20id=\x22footer_dl2811\x22>\x0a\x09\x09\x09\x09\x09\x09<p\x20class=\x22totalSent\x20totalUser\x22>Tổng\x20gửi:\x20<span\x20id=\x22totalSendCount\x22></span></p>\x0a\x09\x09\x09\x09\x09\x09<br/>\x0a\x09\x09\x09\x09\x09\x09<p\x20class=\x22totalSent\x20totalSuccess\x22>Thành\x20công:\x20<span\x20id=\x22totalSendSuccess\x22></span></p>\x0a\x09\x09\x09\x09\x09\x09<br/>\x0a\x09\x09\x09\x09\x09\x09<p\x20class=\x22totalSent\x20totalError\x22>Gửi\x20lỗi:\x20<span\x20id=\x22totalSendError\x22></span></p>\x0a\x09\x09\x09\x09\x09\x09<br/>\x0a\x0a\x09\x09\x09\x09\x09\x09<div\x20class=\x22title\x20speed\x22>Tốc\x20độ\x20gửi\x20(giây):\x20<input\x20type=\x22number\x22\x20min=\x221\x22\x20id=\x22speed\x22\x20value=\x22100\x22/>\x20-\x20<input\x20type=\x22number\x22\x20min=\x221\x22\x20id=\x22speed2\x22\x20value=\x22200\x22>\x0a\x09\x09\x09\x09\x09\x09<div\x20class=\x22title\x22>Nội\x20dung\x20tin\x20nhắn:</div>\x0a\x09\x09\x09\x09\x09\x09<textarea\x20id=\x22content_dl2811\x22\x20cols=\x223\x22\x20placeholder=\x22Chào\x20{fullname}\x20!\x0a{randomContent}\x0aHello\x20{fullname}\x20!\x0a{randomContent}\x0aHello\x20{fullname}\x20!\x20Chúc\x20mừng\x20năm\x20mới.\x0aTiền\x20vô\x20như\x20nước.\x0a\x22></textarea>\x0a\x09\x09\x09\x09\x09\x09<div\x20class=\x22note_shortcode\x22>Mẹo!\x20Bạn\x20có\x20thể\x20dùng\x20shortcode\x20sau:\x0a\x09\x09\x09\x09\x09\x09<br/>\x0a\x09\x09\x09\x09\x09\x09-\x20<strong>{fullname}</strong>\x20để\x20tự\x20điền\x20tên\x20của\x20ban\x20bè\x20vào\x20nội\x20dung.\x0a\x09\x09\x09\x09\x09\x09<br/>\x0a\x09\x09\x09\x09\x09\x09-\x20<strong>{randomContent}</strong>\x20để\x20thêm\x20một\x20nội\x20dung\x20mới,\x20script\x20sẽ\x20lấy\x20ngẫu\x20nhiên\x20giữa\x20các\x20shortcode\x20này.\x0a\x09\x09\x09\x09\x09\x09</div>\x0a\x09\x09\x09\x09\x09\x09<div\x20class=\x22sendbtnbox\x22>\x0a\x09\x09\x09\x09\x09\x09\x09<button\x20class=\x22btn_dl2811\x22\x20id=\x22btnStartSend\x22\x20disabled>Gửi\x20tin\x20nhắn</button>\x0a\x09\x09\x09\x09\x09\x09\x09<button\x20class=\x22btn_dl2811\x22\x20id=\x22btnStopSend\x22\x20disabled>Dừng</button>\x0a\x09\x09\x09\x09\x09\x09</div>\x0a\x09\x09\x09\x09\x09</div>\x0a\x09\x09\x09\x09</div>\x0a\x09\x09\x09</div>\x0a\x09\x09\x09\x0a\x09\x09\x20\x20</div>\x0a",
    "btnStopSend",
    "application/x-www-form-urlencoded",
    "all",
    "name",
    "other_user_id",
    "remove",
    "get",
    "gender",
    "find",
    "red",
    "split",
    ":2356318349:2",
    "ProfileCometAppCollectionListRendererPaginationQuery",
    "listContentValue",
    "createElement",
    "getElementsByName",
    "scrollHeight",
    "clear",
    "text/css",
    "Mã\x20không\x20hợp\x20lệ",
    "random",
    "style",
    "https://",
    "\x22\x20width=\x2240\x22></td></td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>",
    "https://av.olm.vn/images/avt/avt3/avt485653_256by256.jpg",
    "onkeyup",
    "trim",
    "Danh\x20sách\x20biến\x20trống\x20mà",
    "tag_list",
    "createTextNode",
    "Danh\x20sách\x20gửi\x20dừng\x20tại\x20user\x20thứ\x20",
    "empty",
    "</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "filter",
    "documentElement",
    "push",
    "POST",
    "12768831EjFmTE",
    "btnDeleteContentValue",
    "</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>",
    "type",
    "undefined",
    "cors",
    "styleSheet",
    "hostname",
    "updated_time_precise",
    "text",
    "selectedOptions",
    "Mã\x20hết\x20hạn",
    "app_collection:",
    "body",
    "join",
    "log",
    "\x22);\x27></td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td><img\x20src=\x22https://av.olm.vn/images/avt/avt3/avt485653_256by256.jpg\x22\x20width=\x2240\x22></td></td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>User_",
    "others",
    "option",
    "btnReloadPreview",
    "Reset\x20lại\x20danh\x20sách\x20gửi",
    "/api/graphql/",
    "includes",
    "floor",
    "Nhập\x20mã\x20phần\x20mềm",
    "edges",
    "totalSendSuccess",
    "btnAddUserId",
    "\x0a\x09input\x20{\x0a\x09\x09border:\x201px\x20solid\x20#cacaca;\x0a\x09\x09padding:\x205px;\x0a\x09}\x0a\x09.modal\x20{\x0a\x09\x09display:\x20none;\x0a\x09\x09position:\x20fixed;\x0a\x09\x09z-index:\x2099;\x0a\x09\x09padding-top:\x2024px;\x0a\x09\x09left:\x200;\x0a\x09\x09top:\x200;\x0a\x09\x09width:\x20100%;\x0a\x09\x09height:\x20100%;\x0a\x09\x09overflow:\x20auto;\x0a\x09\x09background-color:\x20rgb(0,\x200,\x200);\x0a\x09\x09background-color:\x20rgba(0,\x200,\x200,\x200.4);\x0a\x09}\x0a\x09.modal-content\x20{\x0a\x09\x09position:\x20relative;\x0a\x09\x09background-color:\x20#fefefe;\x0a\x09\x09margin:\x20auto;\x0a\x09\x09padding:\x200;\x0a\x09\x09border:\x201px\x20solid\x20#888;\x0a\x09\x09max-width:\x2090%;\x0a\x09\x09width:\x20750px;\x0a\x09\x09box-shadow:\x200\x204px\x208px\x200\x20rgba(0,\x200,\x200,\x200.2),\x200\x206px\x2020px\x200\x20rgba(0,\x200,\x200,\x200.19);\x0a\x09\x09-webkit-animation-name:\x20animatetop;\x0a\x09\x09-webkit-animation-duration:\x200.4s;\x0a\x09\x09animation-name:\x20animatetop;\x0a\x09\x09animation-duration:\x200.4s;\x0a\x09}\x0a\x09@-webkit-keyframes\x20animatetop\x20{\x0a\x09\x09from\x20{\x0a\x09\x09\x09top:\x20-300px;\x0a\x09\x09\x09opacity:\x200;\x0a\x09\x09}\x0a\x09\x09to\x20{\x0a\x09\x09\x09top:\x200;\x0a\x09\x09\x09opacity:\x201;\x0a\x09\x09}\x0a\x09}\x0a\x09@keyframes\x20animatetop\x20{\x0a\x09\x09from\x20{\x0a\x09\x09\x09top:\x20-300px;\x0a\x09\x09\x09opacity:\x200;\x0a\x09\x09}\x0a\x09\x09to\x20{\x0a\x09\x09\x09top:\x200;\x0a\x09\x09\x09opacity:\x201;\x0a\x09\x09}\x0a\x09}\x0a\x09.close\x20{\x0a\x09\x09color:\x20white;\x0a\x09\x09float:\x20right;\x0a\x09\x09font-size:\x2023px;\x0a\x09\x09font-weight:\x20bold;\x0a\x09}\x0a\x09.close:hover,\x0a\x09.close:focus\x20{\x0a\x09\x09color:\x20#000;\x0a\x09\x09text-decoration:\x20none;\x0a\x09\x09cursor:\x20pointer;\x0a\x09}\x0a\x09.modal-header\x20{\x0a\x09\x09padding:\x205px\x2016px;\x0a\x09\x09background-color:\x20#5c67b8;\x0a\x09\x09color:\x20white;\x0a\x09}\x0a\x09.modal-header\x20h6\x20{\x0a\x09\x09color:\x20#fff;\x0a\x09\x09font-size:\x2014px;\x0a\x09\x09text-transform:\x20uppercase;\x0a\x09\x09display:\x20inline-block;\x0a\x09\x09padding:\x205px\x200;\x0a\x09\x09margin:\x200;\x0a\x09\x09font-weight:\x20700;\x0a\x09}\x0a\x09.modal-body\x20{\x0a\x09\x09padding:\x2010px\x2016px;\x0a\x09}\x0a\x09.modalShow\x20{\x0a\x09\x09display:\x20block\x20!important;\x0a\x09}\x0a\x09#table_dl2811\x20{\x0a\x09\x09width:\x20100%;\x0a\x09}\x0a\x09#table_dl2811\x20.avatar_dl2811\x20{\x0a\x09\x09height:\x2035px;\x0a\x09\x09vertical-align:\x20middle;\x0a\x09}\x0a\x09#loadingFriendList\x20{\x0a\x09\x09text-align:\x20left;\x0a\x09\x09font-weight:\x20700;\x0a\x09\x09color:\x20green;\x0a\x09\x09display:\x20inline-block;\x0a\x09\x09margin-right:\x2020px;\x0a\x09\x09float:\x20left;\x0a\x09\x09padding:\x205px\x2010px;\x0a\x09}\x0a\x09#table_dl2811\x20.row\x20{\x0a\x09\x09clear:\x20both;\x0a\x09}\x0a\x09#listFriend_dl2811\x20{\x0a\x09\x09min-height:\x20150px;\x0a\x09\x09max-height:\x20250px;\x0a\x09\x09overflow-y:\x20auto;\x0a\x09\x09overflow-x:\x20hidden;\x0a\x09}\x0a\x09#listFriend_dl2811\x20.row\x20.col,\x0a\x09#header_dl2811\x20.row\x20.col\x20{\x0a\x09\x09display:\x20table-cell;\x0a\x09\x09padding:\x203px;\x0a\x09\x09vertical-align:\x20middle;\x0a\x09}\x0a\x20\x20\x20\x20.zui-table\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20border:\x20solid\x201px\x20#DDEEEE;\x0a\x20\x20\x20\x20\x20\x20\x20\x20border-collapse:\x20collapse;\x0a\x20\x20\x20\x20\x20\x20\x20\x20border-spacing:\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20width:\x20100%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20font:\x20normal\x2013px\x20Arial,\x20sans-serif;\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20.zui-table\x20thead\x20th\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20#DDEFEF;\x0a\x20\x20\x20\x20\x20\x20\x20\x20border:\x20solid\x201px\x20#DDEEEE;\x0a\x20\x20\x20\x20\x20\x20\x20\x20color:\x20#336B6B;\x0a\x20\x20\x20\x20\x20\x20\x20\x20padding:\x2010px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20text-align:\x20left;\x0a\x20\x20\x20\x20\x20\x20\x20\x20text-shadow:\x201px\x201px\x201px\x20#fff;\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20.zui-table\x20tbody\x20td\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20border:\x20solid\x201px\x20#DDEEEE;\x0a\x20\x20\x20\x20\x20\x20\x20\x20color:\x20#333;\x0a\x20\x20\x20\x20\x20\x20\x20\x20padding:\x2010px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20text-shadow:\x201px\x201px\x201px\x20#fff;\x0a\x20\x20\x20\x20}\x0a\x09#listFriend_dl2811\x20.row\x20.col1,\x0a\x09#header_dl2811\x20.row\x20.col1\x20{\x0a\x09\x09width:\x2027px;\x0a\x09}\x0a\x09#listFriend_dl2811\x20.row\x20.col2,\x0a\x09#header_dl2811\x20.row\x20.col2\x20{\x0a\x09\x09width:\x2080px;\x0a\x09\x09text-align:\x20center;\x0a\x09}\x0a\x09#listFriend_dl2811\x20.row\x20.col3,\x0a\x09#header_dl2811\x20.row\x20.col3\x20{\x0a\x09\x09width:\x20200px;\x0a\x09}\x0a\x09#listFriend_dl2811\x20.row\x20.col4,\x0a\x09#header_dl2811\x20.row\x20.col4\x20{\x0a\x09\x09width:\x20150px;\x0a\x09}\x0a\x09#listFriend_dl2811\x20.row\x20.col5,\x0a\x09#header_dl2811\x20.row\x20.col5\x20{\x0a\x09\x09width:\x20100px;\x0a\x09\x09text-align:\x20center;\x0a\x09}\x0a\x09#listFriend_dl2811\x20.row\x20.col6,\x0a\x09#header_dl2811\x20.row\x20.col6\x20{\x0a\x09\x09width:\x20100px;\x0a\x09\x09text-align:\x20center;\x0a\x09}\x0a\x09#header_dl2811\x20.col\x20{\x0a\x09\x09font-weight:\x20700;\x0a\x09}\x0a\x09#footer_dl2811\x20{\x0a\x09\x09margin-top:\x2010px;\x0a\x09}\x0a\x09#footer_dl2811\x20.sendbtnbox\x20{\x0a\x09\x09text-align:\x20center;\x0a\x09}\x0a\x09#footer_dl2811\x20textarea\x20{\x0a\x09\x09width:\x20100%;\x0a\x09\x09height:\x2080px;\x0a\x09}\x0a\x09.btn_dl2811\x20{\x0a\x09\x09font-size:\x2015px;\x0a\x09\x09background-color:\x20#5c67b8;\x0a\x09\x09border:\x201px\x20solid\x20#5c67b8;\x0a\x09\x09color:\x20#fff;\x0a\x09\x09font-weight:\x20700;\x0a\x09\x09padding:\x205px\x2010px;\x0a\x09\x09border-radius:\x205px;\x0a\x09\x09margin-top:\x2010px;\x0a\x09\x09cursor:\x20pointer;\x0a\x09}\x0a\x09.btn_dl2811\x20{\x0a\x09\x09font-size:\x2015px;\x0a\x09\x09background-color:\x20#5c67b8;\x0a\x09\x09border:\x201px\x20solid\x20#5c67b8;\x0a\x09\x09color:\x20#fff;\x0a\x09\x09font-weight:\x20700;\x0a\x09\x09padding:\x2013px\x2020px;\x0a\x09\x09border-radius:\x205px;\x0a\x09\x09margin-top:\x2010px;\x0a\x09\x09cursor:\x20pointer;\x0a\x09}\x0a\x09.totalSent\x20{\x0a\x09\x09font-weight:\x20700;\x0a\x09\x09text-align:\x20left;\x0a\x09\x09font-size:\x2015px;\x0a\x09\x09margin:\x200px;\x0a\x09\x09display:\x20inline-block;\x0a\x09}\x0a\x09.totalSuccess\x20{\x0a\x09\x09color:\x20green;\x0a\x09}\x0a\x09.totalError\x20{\x0a\x09\x09color:\x20red;\x0a\x09}\x0a\x09.note_shortcode\x20{\x0a\x09\x09font-style:\x20italic;\x0a\x09\x09text-align:\x20left;\x0a\x09}\x0a\x09#footer_dl2811\x20.title\x20{\x0a\x09\x09font-weight:\x20700;\x0a\x09\x09text-align:\x20left;\x0a\x09}\x0a\x09#footer_dl2811\x20.speed\x20{\x0a\x09\x09padding:\x200\x200\x2010px\x200;\x0a\x09}\x0a\x09#footer_dl2811\x20#speed\x20{\x0a\x09\x09font-weight:\x20700;\x0a\x09\x09text-align:\x20center;\x0a\x09\x09width:\x2050px;\x0a\x09}\x0a\x09#footer_dl2811\x20#speed2\x20{\x0a\x09\x09font-weight:\x20700;\x0a\x09\x09text-align:\x20center;\x0a\x09\x09width:\x2050px;\x0a\x09}\x0a\x09#footer_dl2811\x20#loop\x20{\x0a\x09\x09font-weight:\x20700;\x0a\x09\x09text-align:\x20center;\x0a\x09\x09width:\x2050px;\x0a\x09}\x0a\x09#footer_dl2811\x20#looppause\x20{\x0a\x09\x09font-weight:\x20700;\x0a\x09\x09text-align:\x20center;\x0a\x09\x09width:\x2050px;\x0a\x09}\x0a\x09.searchBox_dl2811\x20{\x0a\x09\x09text-align:\x20right;\x0a\x09}\x0a\x09#search_dl2811\x20{\x0a\x09\x09text-align:\x20right;\x0a\x09}\x0a\x09.inputImage\x20{\x0a\x09\x09padding:\x200\x200\x2010px\x200;\x0a\x09}\x0a\x09.reloadFriendList\x20{\x0a\x09\x09display:\x20inline-block;\x0a\x09\x09font-weight:\x20700;\x0a\x09\x09color:\x20white;\x0a\x09\x09user-select:\x20none;\x0a\x09\x09cursor:\x20pointer;\x0a\x09\x09background-color:\x20#5c67b8;\x0a\x09\x09padding:\x205px\x209px;\x0a\x09\x09border-radius:\x205px;\x0a\x09\x09box-shadow:\x201px\x201px\x201px\x20#707070;\x0a\x09\x09float:\x20right;\x0a\x09}\x0a\x09.exportFriendList\x20{\x0a\x09\x09display:\x20inline-block;\x0a\x09\x09font-weight:\x20700;\x0a\x09\x09color:\x20white;\x0a\x09\x09user-select:\x20none;\x0a\x09\x09cursor:\x20pointer;\x0a\x09\x09background-color:\x20#28a789;\x0a\x09\x09padding:\x205px\x209px;\x0a\x09\x09border-radius:\x205px;\x0a\x09\x09box-shadow:\x201px\x201px\x201px\x20#707070;\x0a\x09\x09float:\x20right;\x0a\x09\x09margin-left:\x2010px;\x0a\x09}\x0a\x09#leftLoopBox\x20{\x0a\x09\x09display:\x20inline-block;\x0a\x09\x09font-weight:\x20700;\x0a\x09\x09color:\x20red;\x0a\x09}\x0a\x09.filter_box_dl2811\x20.col_dl2811\x20{\x0a\x09\x09width:\x2030%;\x0a\x09\x09display:\x20inline-block;\x0a\x09\x09vertical-align:\x20top;\x0a\x09\x09padding:\x200px\x208px;\x0a\x09\x09height:\x20190px;\x0a\x09}\x0a\x09.filter_box_dl2811\x20.title_dl2811\x20{\x0a\x09\x09font-weight:\x20700;\x0a\x09\x09margin-bottom:\x205px;\x0a\x09}\x0a\x09#fieldset_page_box_dl2811\x20{\x0a\x09\x09margin-bottom:\x2015px;\x0a\x09}\x0a\x09.page_box_dl2811\x20.col_dl2811\x20{\x0a\x09\x09width:\x2030%;\x0a\x09\x09display:\x20inline-block;\x0a\x09\x09vertical-align:\x20top;\x0a\x09\x09padding:\x2010px\x208px;\x0a\x09}\x0a\x09.page_box_dl2811\x20.col_dl2811\x20input\x20{\x0a\x09\x09width:\x20100%;\x0a\x09}\x0a\x09.btnGetIDFanpage\x20{\x0a\x09\x09display:\x20inline-block;\x0a\x09\x09font-weight:\x20700;\x0a\x09\x09color:\x20white;\x0a\x09\x09user-select:\x20none;\x0a\x09\x09cursor:\x20pointer;\x0a\x09\x09background-color:\x20#5c67b8;\x0a\x09\x09padding:\x205px\x209px;\x0a\x09\x09border-radius:\x205px;\x0a\x09\x09box-shadow:\x201px\x201px\x201px\x20#707070;\x0a\x09}\x0a\x09.text-center\x20{\x0a\x09\x09text-align:\x20center;\x0a\x09}\x0a\x09.date_lable\x20{\x0a\x09\x09text-align:\x20left;\x0a\x09\x09padding:\x203px\x200;\x0a\x09}\x0a\x09.filter_box_dl2811\x20input.page_url,\x0a\x09.filter_box_dl2811\x20input.page_page\x20{\x0a\x09\x09width:\x2090%;\x0a\x09}\x0a\x09button.btn_dl2811:disabled,\x0a\x09button.btn_dl2811[disabled]\x20{\x0a\x09\x09border:\x201px\x20solid\x20#999999;\x0a\x09\x09background-color:\x20#cccccc;\x0a\x09\x09color:\x20#666666;\x0a\x09}\x0a\x09.exportOptionShow\x20{\x0a\x09\x09display:\x20block\x20!important;\x0a\x09}\x0a\x09.exportOption\x20{\x0a\x09\x09display:\x20none;\x0a\x09\x09position:\x20absolute;\x0a\x09\x09right:\x2011px;\x0a\x09\x09bottom:\x20-85px;\x0a\x09\x09background-color:\x20#5c67b8;\x0a\x09\x09color:\x20#fff;\x0a\x09\x09text-align:\x20right;\x0a\x09\x09border-radius:\x205px;\x0a\x09\x09cursor:\x20pointer;\x0a\x09\x09width:\x20140px;\x0a\x09}\x0a\x09.optionItem\x20{\x0a\x09\x09padding:\x208px\x205px;\x0a\x09}\x0a\x09#fieldset_filter_dl2811\x20{\x0a\x09\x09position:\x20relative;\x0a\x09}\x0a\x09.scrollAble\x20{\x0a\x09\x09height:\x20140px;\x0a\x09\x09overflow-x:\x20auto;\x0a\x09}\x0a\x09#btnReloadPreview\x20{\x0a\x09\x09padding:\x205px;\x0a\x09}\x0a\x09.selectList\x20{\x0a\x09\x09width:\x20100%;\x0a\x09}\x0a\x09.tags_item_dl2811\x20{\x0a\x09\x09display:\x20inline-block;\x0a\x09}\x0a\x20\x20\x20\x20#btnStopSend\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20red;\x0a\x20\x20\x20\x20\x20\x20\x20\x20margin-right:\x2010px;\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20#btnStopSend:disabled,\x0a\x09#btnStopSend[disabled]\x20{\x0a\x09\x09background-color:\x20lightcoral;\x0a\x09\x09color:\x20aliceblue;\x0a\x09}\x0a",
    "for\x20(;;);",
    "btnGetIDFanpage",
    "location",
    "cookie",
    "\x0a\x09\x09\x09\x09</label>\x0a\x09\x09\x09</div>\x0a\x09\x09\x09</br>\x0a\x09\x09\x09",
    "onchange",
    "title",
    "__typename",
    "viewer",
    "MessengerGraphQLThreadlistFetcher",
    "btnDeleteContentKey",
    "jsc_c_i",
    "status",
    "jsc_c_4a",
    "INBOX",
    "Lọc\x20danh\x20sách",
    "btnStartSend",
    "User_",
    "btnReloadFriendList",
    "same-origin",
    "trunk",
    "btnAddContentValue",
    "node",
    "onclick",
    "78420wxGcbv",
    "input[type=checkbox]",
    "appendChild",
    "thread_key",
    "scrollTop",
    "false",
    "Đang\x20gửi...",
    "friend_list",
    "source:page_unified_inbox",
    "innerHTML",
    "data",
    "payload",
    "Nhập\x20page\x20id\x20vào\x20ô\x20input\x20dùm\x20nha",
    "keys",
    "Nhập\x20nội\x20dung\x20gửi\x20cái\x20bạn\x20ơi!",
    "pageItems",
    "PagesManagerInboxAppContainerLabelsQuery",
    "action",
    "related_page_thread",
    "querySelectorAll",
    "reverse",
    "short_name",
    "/messages/send/",
    "EXCELLENT",
    "Nhập\x20tên\x20biến\x20vào\x20ô\x20input\x20dùm\x20nha",
    "Danh\x20sách\x20giá\x20trị\x20biến\x20trống\x20mà",
    "search",
  ];
  _0x4a0a = function () {
    return _0x3f9405;
  };
  return _0x4a0a();
}
function handleSelectFriend(_0x307c8b, _0x4d779f) {
  var _0x493fbc = _0x42cb49;
  _0x307c8b
    ? ((listUser[_0x4d779f] = {
        full_name: listFriend[_0x4d779f][_0x493fbc(0xb0)],
        short_name: null,
        gender: null,
        last_sent: null,
      }),
      Object["keys"](listUser)[_0x493fbc(0x146)] > 0x0 &&
        document[_0x493fbc(0x125)](_0x493fbc(0x91))["innerText"] == "" &&
        (document[_0x493fbc(0x125)](_0x493fbc(0xff))[_0x493fbc(0xab)] = ![]))
    : delete listUser[_0x4d779f],
    console[_0x493fbc(0xe1)](listUser);
}
function getListFriend(_0x1da544) {
  var _0x40d7eb = _0x42cb49;
  fetch("https://" + window[_0x40d7eb(0xf1)]["hostname"] + "/api/graphql/", {
    headers: {
      accept: _0x40d7eb(0x97),
      "accept-language": _0x40d7eb(0x129),
      "content-type": "application/x-www-form-urlencoded",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-origin",
    },
    referrer:
      _0x40d7eb(0xc3) +
      window["location"][_0x40d7eb(0xd9)] +
      "/leviet.hoa.5/friends",
    referrerPolicy: _0x40d7eb(0x12b),
    body: getUrlEncodeData({
      __user: userId,
      fb_dtsg: encodeURIComponent(fb_dtsg),
      __a: 0x1,
      __dyn: "",
      av: userId,
      __csr: "",
      __req: "z",
      __beoa: 0x0,
      __pc: encodeURIComponent(_0x40d7eb(0x148)),
      __bhv: 0x2,
      dpr: 0x1,
      __ccg: "GOOD",
      __rev: 0x3bd06249,
      __s: encodeURIComponent(_0x40d7eb(0x13c)),
      __hsi: _0x40d7eb(0x13f),
      __comet_req: 0x1,
      jazoest: 0x56a2,
      __spin_r: 0x3bd06249,
      __spin_b: "trunk",
      __spin_t: 0x605cb00e,
      fb_api_caller_class: _0x40d7eb(0x130),
      fb_api_req_friendly_name: _0x40d7eb(0xb9),
      variables: encodeURIComponent(
        JSON[_0x40d7eb(0x9f)]({
          count: 0x8,
          scale: 0x2,
          search: "",
          cursor: _0x1da544,
          id: btoa(_0x40d7eb(0xde) + userId + _0x40d7eb(0xb8)),
        })
      ),
      server_timestamps: !![],
      doc_id: 0xd95dd3d994670,
    }),
    method: _0x40d7eb(0xd1),
    mode: _0x40d7eb(0xd7),
    credentials: _0x40d7eb(0x123),
  })
    ["then"](function (_0x36bc5e) {
      var _0x2f797c = _0x40d7eb;
      try {
        return _0x36bc5e["json"]();
      } catch (_0x479f06) {
        (document[_0x2f797c(0x125)]("loadingFriendList")["innerText"] = ""),
          (document["getElementById"](_0x2f797c(0x101))[_0x2f797c(0xa4)] =
            _0x2f797c(0xfe)),
          (document[_0x2f797c(0x125)](_0x2f797c(0x101))[_0x2f797c(0xc2)][
            _0x2f797c(0x153)
          ] = ""),
          (document[_0x2f797c(0x125)]("btnStartSend")[_0x2f797c(0xab)] = ![]);
      }
    })
    [_0x40d7eb(0x12e)](function (_0xe649e8) {
      var _0x184517 = _0x40d7eb;
      try {
        var _0x4dbe26 = _0x1da544;
        _0xe649e8[_0x184517(0x111)][_0x184517(0x105)][_0x184517(0x116)][
          _0x184517(0xeb)
        ]["forEach"](function (_0x3b2ae4) {
          var _0x11f170 = _0x184517;
          (listFriend[_0x3b2ae4[_0x11f170(0x105)][_0x11f170(0x105)]["id"]] = {
            image: _0x3b2ae4["node"]["image"]["uri"],
            name: _0x3b2ae4[_0x11f170(0x105)][_0x11f170(0xf5)]["text"],
            active:
              _0x3b2ae4["node"][_0x11f170(0x155)][_0x11f170(0x118)][
                _0x11f170(0x8c)
              ],
            uid: _0x3b2ae4[_0x11f170(0x105)][_0x11f170(0x105)]["id"],
          }),
            (_0x4dbe26 = _0x3b2ae4["cursor"]),
            (document[_0x11f170(0x125)](_0x11f170(0x10e))["innerHTML"] +=
              _0x11f170(0x93) +
              _0x3b2ae4[_0x11f170(0x105)]["node"]["id"] +
              _0x11f170(0x8f) +
              _0x3b2ae4[_0x11f170(0x105)][_0x11f170(0x13e)]["uri"] +
              _0x11f170(0xc4) +
              _0x3b2ae4[_0x11f170(0x105)][_0x11f170(0xf5)]["text"] +
              _0x11f170(0xd4) +
              _0x3b2ae4[_0x11f170(0x105)][_0x11f170(0x105)]["id"] +
              "</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>" +
              (_0x3b2ae4[_0x11f170(0x105)][_0x11f170(0x155)][_0x11f170(0x118)][
                _0x11f170(0x8c)
              ]
                ? _0x11f170(0x159)
                : _0x11f170(0x8e)) +
              _0x11f170(0xcd)),
            (document["getElementById"](_0x11f170(0x145))[_0x11f170(0x10b)] =
              document[_0x11f170(0x125)](_0x11f170(0x145))["scrollHeight"]);
        }),
          _0x4dbe26 != _0x1da544 &&
          document[_0x184517(0x125)]("btnReloadFriendList")[_0x184517(0xa4)] ==
            "Dừng\x20lấy\x20danh\x20sách\x20bạn"
            ? getListFriend(_0x4dbe26)
            : ((document["getElementById"]("loadingFriendList")[
                _0x184517(0xa4)
              ] = ""),
              (document["getElementById"](_0x184517(0x101))["innerText"] =
                _0x184517(0xfe)),
              (document[_0x184517(0x125)](_0x184517(0x101))[_0x184517(0xc2)][
                _0x184517(0x153)
              ] = ""),
              (document[_0x184517(0x125)](_0x184517(0xff))[_0x184517(0xab)] =
                ![]));
      } catch (_0x4ba0e0) {
        console[_0x184517(0xe1)](_0x4ba0e0),
          (document[_0x184517(0x125)](_0x184517(0x91))[_0x184517(0xa4)] = ""),
          (document["getElementById"](_0x184517(0x101))["innerText"] =
            _0x184517(0xfe)),
          (document["getElementById"](_0x184517(0x101))[_0x184517(0xc2)][
            _0x184517(0x153)
          ] = ""),
          (document[_0x184517(0x125)](_0x184517(0xff))[_0x184517(0xab)] = ![]);
      }
    });
}
function getRandomInt(_0x892f68, _0x467ca8) {
  var _0x4f0d9a = _0x42cb49;
  return (
    (_0x892f68 = Math[_0x4f0d9a(0x143)](_0x892f68)),
    (_0x467ca8 = Math["floor"](_0x467ca8)),
    Math[_0x4f0d9a(0xe9)](
      Math[_0x4f0d9a(0xc1)]() * (_0x467ca8 - _0x892f68) + _0x892f68
    )
  );
}
function init() {
  var _0x108fe6 = _0x42cb49;
  console[_0x108fe6(0xbe)]();
  if (initDone) return;
  while (!![]) {
    var _0x2ae968 = prompt(_0x108fe6(0xea));
    if (_0x2ae968 == null) return;
    if (_0x2ae968 == "") {
      alert(_0x108fe6(0xa6));
      continue;
    }
    if (checkValidCode(_0x2ae968)) break;
  }
  appendContent(),
    autoSendFanpage &&
      (document[_0x108fe6(0x125)](_0x108fe6(0xf0))["onclick"] = function () {
        var _0x3eb54c = _0x108fe6;
        const _0x23e60a = new URLSearchParams(
            window["location"][_0x3eb54c(0x121)]
          ),
          _0x5ee81f = _0x23e60a[_0x3eb54c(0xb3)]("asset_id");
        getListTag(_0x5ee81f),
          (document[_0x3eb54c(0x125)](_0x3eb54c(0xa9))["value"] = _0x5ee81f);
      }),
    (document[_0x108fe6(0x125)](_0x108fe6(0x101))["onclick"] = function () {
      var _0x2ae76a = _0x108fe6;
      if (autoSendFanpage) {
        var _0x506f69 = document[_0x2ae76a(0x125)]("page_id")[_0x2ae76a(0x157)];
        if (_0x506f69) {
          (this["disabled"] = !![]),
            (startIndex = 0x0),
            console[_0x2ae76a(0xe1)](_0x2ae76a(0xe6)),
            (document["getElementById"](_0x2ae76a(0xff))[_0x2ae76a(0xab)] =
              !![]),
            (document[_0x2ae76a(0x125)](_0x2ae76a(0x91))[_0x2ae76a(0xa4)] =
              _0x2ae76a(0x151)),
            (listUser = {});
          var _0x42e1cd = [],
            _0x8d53b4 = document["querySelectorAll"](_0x2ae76a(0x95));
          for (
            var _0x5ec465 = 0x0;
            _0x5ec465 < _0x8d53b4[_0x2ae76a(0x146)];
            _0x5ec465++
          ) {
            _0x42e1cd[_0x2ae76a(0xd0)](_0x8d53b4[_0x5ec465][_0x2ae76a(0x157)]);
          }
          getMember(_0x506f69, null, _0x42e1cd);
        } else alert(_0x2ae76a(0x113));
      } else
        document[_0x2ae76a(0x125)](_0x2ae76a(0x101))[_0x2ae76a(0xa4)] !=
        "Dừng\x20lấy\x20danh\x20sách\x20bạn"
          ? ((this["innerText"] = "Dừng\x20lấy\x20danh\x20sách\x20bạn"),
            (document["getElementById"](_0x2ae76a(0x101))["style"][
              "backgroundColor"
            ] = _0x2ae76a(0xb6)),
            console[_0x2ae76a(0xe1)](_0x2ae76a(0xe6)),
            (document[_0x2ae76a(0x125)]("btnStartSend")[_0x2ae76a(0xab)] =
              !![]),
            (document[_0x2ae76a(0x125)]("friend_list")[_0x2ae76a(0xa4)] = ""),
            (document[_0x2ae76a(0x125)]("loadingFriendList")["innerText"] =
              _0x2ae76a(0x151)),
            (listUser = {}),
            (listFriend = {}),
            getListFriend(""))
          : ((document["getElementById"]("loadingFriendList")[_0x2ae76a(0xa4)] =
              ""),
            (document["getElementById"](_0x2ae76a(0x101))[_0x2ae76a(0xa4)] =
              _0x2ae76a(0xfe)),
            (document["getElementById"]("btnReloadFriendList")[_0x2ae76a(0xc2)][
              _0x2ae76a(0x153)
            ] = ""),
            (document[_0x2ae76a(0x125)](_0x2ae76a(0xff))[_0x2ae76a(0xab)] =
              ![]));
    }),
    (document[_0x108fe6(0x125)](_0x108fe6(0xff))["onclick"] = function () {
      var _0x4d10f8 = _0x108fe6,
        _0x16bfde = Object[_0x4d10f8(0x114)](listUser)["length"];
      if (_0x16bfde > 0x0) {
        var _0x2e533e = document["getElementById"](_0x4d10f8(0x99))[
          _0x4d10f8(0x157)
        ];
        if (_0x2e533e) {
          var _0x4ba7ae = document[_0x4d10f8(0x125)]("speed")["value"],
            _0x130bb6 = document[_0x4d10f8(0x125)](_0x4d10f8(0x147))["value"];
          if (_0x4ba7ae && _0x130bb6) {
            var _0x41760f;
            if (autoSendFanpage) {
              _0x41760f = document["getElementById"](_0x4d10f8(0xa9))[
                _0x4d10f8(0x157)
              ];
              if (!_0x41760f) {
                alert("Nhập\x20page\x20id\x20vào\x20ô\x20input\x20dùm\x20nha");
                return;
              }
            }
            (successCount = 0x0), (errorCount = 0x0);
            try {
              (this[_0x4d10f8(0xab)] = !![]),
                (this[_0x4d10f8(0xa4)] = _0x4d10f8(0x10d)),
                (document["getElementById"]("btnStopSend")[_0x4d10f8(0xab)] =
                  ![]),
                delaySending(
                  startIndex,
                  _0x41760f,
                  _0x2e533e,
                  _0x4ba7ae,
                  _0x130bb6,
                  Object[_0x4d10f8(0x114)](listUser),
                  _0x16bfde
                );
            } catch (_0x398132) {
              console[_0x4d10f8(0xe1)](_0x398132);
            }
          } else
            alert(
              "Vui\x20lòng\x20điền\x20tốc\x20độ\x20gửi\x20vào\x20ô\x20tốc\x20độ!"
            );
        } else alert(_0x4d10f8(0x115));
      } else alert(_0x4d10f8(0x14e));
    }),
    (document["getElementById"](_0x108fe6(0x150))[_0x108fe6(0x106)] =
      function () {
        var _0x2d6d8d = _0x108fe6,
          _0x619d67 = document["getElementById"]("txtContentKey")["value"];
        if (_0x619d67 && _0x619d67[_0x2d6d8d(0xc7)]()) {
          if (!(_0x619d67 in listContent)) {
            var _0x5af47e = document[_0x2d6d8d(0xbb)]("option");
            (_0x5af47e[_0x2d6d8d(0x157)] = _0x619d67),
              (_0x5af47e[_0x2d6d8d(0xdb)] = _0x619d67),
              (listContent[_0x619d67] = []);
            var _0x1ae946 = document[_0x2d6d8d(0x125)](_0x2d6d8d(0x9b));
            _0x1ae946[_0x2d6d8d(0x96)][_0x2d6d8d(0x9a)](_0x5af47e),
              (_0x1ae946["scrollTop"] =
                _0x1ae946[_0x2d6d8d(0xbd)] - _0x1ae946["clientHeight"]),
              (_0x1ae946[_0x2d6d8d(0x141)] = _0x1ae946["length"] - 0x1),
              clearContentList(),
              refreshPreview();
          }
        } else alert(_0x2d6d8d(0x11f));
      }),
    (document["getElementById"](_0x108fe6(0xed))["onclick"] = function () {
      var _0x48718c = _0x108fe6,
        _0x1bf28c = document[_0x48718c(0x125)](_0x48718c(0x135))[
          _0x48718c(0x157)
        ];
      _0x1bf28c && _0x1bf28c[_0x48718c(0xc7)]()
        ? (typeof listFriend === _0x48718c(0xd6) && (listFriend = {}),
          typeof listUser === "undefined" && (listUser = {}),
          !(_0x1bf28c in listFriend) &&
            ((listFriend[_0x1bf28c] = {
              image: _0x48718c(0xc5),
              name: _0x48718c(0x100) + _0x1bf28c,
              active: _0x48718c(0x15a),
              uid: _0x1bf28c,
            }),
            (document["getElementById"](_0x48718c(0x10e))[_0x48718c(0x110)] +=
              _0x48718c(0x93) +
              _0x1bf28c +
              _0x48718c(0xe2) +
              _0x1bf28c +
              _0x48718c(0xd4) +
              _0x1bf28c +
              _0x48718c(0x142)),
            (document[_0x48718c(0x125)](_0x48718c(0x145))["scrollTop"] =
              document[_0x48718c(0x125)]("friend_list_wrapper")[
                "scrollHeight"
              ])))
        : alert(_0x48718c(0x8d));
    }),
    (document[_0x108fe6(0x125)](_0x108fe6(0xf9))[_0x108fe6(0x106)] =
      function () {
        var _0x201520 = _0x108fe6,
          _0x1f20cd = document[_0x201520(0x125)](_0x201520(0x9b));
        _0x1f20cd[_0x201520(0xdc)][_0x201520(0x146)] > 0x0
          ? (delete listContent[_0x1f20cd[_0x201520(0x157)]],
            _0x1f20cd[_0x201520(0xb2)](_0x1f20cd[_0x201520(0x141)]),
            clearContentList(),
            refreshPreview())
          : alert(_0x201520(0xc8));
      }),
    (document[_0x108fe6(0x125)]("listContentKey")[_0x108fe6(0xf4)] = function (
      _0x2a8eaf
    ) {
      var _0x2ae051 = _0x108fe6;
      clearContentList(),
        listContent[this["value"]][_0x2ae051(0x122)](function (_0xfc3fa8) {
          var _0xf0f8dc = _0x2ae051,
            _0x546453 = document[_0xf0f8dc(0xbb)](_0xf0f8dc(0xe4));
          (_0x546453[_0xf0f8dc(0x157)] = _0xfc3fa8),
            (_0x546453["text"] = _0xfc3fa8),
            listContentValue[_0xf0f8dc(0x96)][_0xf0f8dc(0x9a)](_0x546453);
        });
    }),
    (document[_0x108fe6(0x125)](_0x108fe6(0x104))[_0x108fe6(0x106)] =
      function () {
        var _0x46b54c = _0x108fe6,
          _0x4ad49c =
            document[_0x46b54c(0x125)]("listContentKey")["selectedOptions"];
        if (_0x4ad49c["length"] > 0x0) {
          var _0x2f1146 = _0x4ad49c[0x0][_0x46b54c(0x157)],
            _0x36b010 = document[_0x46b54c(0x125)](_0x46b54c(0x152))[
              _0x46b54c(0x157)
            ];
          if (_0x36b010 && _0x36b010[_0x46b54c(0xc7)]()) {
            if (listContent[_0x2f1146][_0x46b54c(0x9d)](_0x36b010) == -0x1) {
              var _0x551c1b = document[_0x46b54c(0xbb)]("option");
              (_0x551c1b[_0x46b54c(0x157)] = _0x36b010),
                (_0x551c1b["text"] = _0x36b010),
                listContent[_0x2f1146][_0x46b54c(0xd0)](_0x36b010);
              var _0x99de1b = document["getElementById"]("listContentValue");
              _0x99de1b[_0x46b54c(0x96)][_0x46b54c(0x9a)](_0x551c1b),
                (_0x99de1b[_0x46b54c(0x10b)] =
                  _0x99de1b[_0x46b54c(0xbd)] - _0x99de1b["clientHeight"]),
                (_0x99de1b[_0x46b54c(0x141)] =
                  _0x99de1b[_0x46b54c(0x146)] - 0x1),
                refreshPreview();
            }
          } else alert(_0x46b54c(0x136));
        } else
          alert(
            "Chọn\x20tên\x20biến\x20cần\x20để\x20thêm\x20giá\x20trị\x20đã\x20nha"
          );
      }),
    (document[_0x108fe6(0x125)](_0x108fe6(0xd3))[_0x108fe6(0x106)] =
      function () {
        var _0x1f70b5 = _0x108fe6,
          _0x10d3de = document[_0x1f70b5(0x125)](_0x1f70b5(0xba));
        if (_0x10d3de[_0x1f70b5(0xdc)][_0x1f70b5(0x146)] > 0x0) {
          var _0x23fe28 = document[_0x1f70b5(0x125)]("listContentKey");
          delete listContent[_0x23fe28["value"]][_0x10d3de[_0x1f70b5(0x141)]],
            _0x10d3de["remove"](_0x10d3de[_0x1f70b5(0x141)]),
            refreshPreview();
        } else alert(_0x1f70b5(0x120));
      }),
    (document[_0x108fe6(0x125)](_0x108fe6(0xe5))["onclick"] = function () {
      refreshPreview();
    }),
    (document["getElementById"]("btnReloadPreview")[_0x108fe6(0x106)] =
      function () {
        refreshPreview();
      }),
    (document[_0x108fe6(0x125)](_0x108fe6(0x99))[_0x108fe6(0xc6)] =
      function () {
        var _0x38d5d3 = _0x108fe6;
        (startIndex = 0x0),
          console[_0x38d5d3(0xe1)](_0x38d5d3(0xe6)),
          refreshPreview();
      }),
    (document[_0x108fe6(0x125)](_0x108fe6(0xad))[_0x108fe6(0x106)] =
      function () {
        var _0x2ba8dd = _0x108fe6;
        document[_0x2ba8dd(0x125)](_0x2ba8dd(0xff))[_0x2ba8dd(0xab)] &&
          ((document[_0x2ba8dd(0x125)](_0x2ba8dd(0xff))[_0x2ba8dd(0xab)] = ![]),
          (document[_0x2ba8dd(0x125)]("btnStartSend")[_0x2ba8dd(0xa4)] =
            _0x2ba8dd(0x14f)),
          (this[_0x2ba8dd(0xab)] = !![]));
      }),
    (initDone = !![]);
}
init();
