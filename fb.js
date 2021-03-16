
var styleContent = `
    input {
        border: 1px solid #cacaca;
        padding: 5px;
    }
    .modal {
        display: none;
        position: fixed;
        z-index: 99;
        padding-top: 24px;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        overflow: auto;
        background-color: rgb(0, 0, 0);
        background-color: rgba(0, 0, 0, 0.4);
    }
    .modal-content {
        position: relative;
        background-color: #fefefe;
        margin: auto;
        padding: 0;
        border: 1px solid #888;
        max-width: 90%;
        width: 750px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        -webkit-animation-name: animatetop;
        -webkit-animation-duration: 0.4s;
        animation-name: animatetop;
        animation-duration: 0.4s;
    }
    @-webkit-keyframes animatetop {
        from {
            top: -300px;
            opacity: 0;
        }
        to {
            top: 0;
            opacity: 1;
        }
    }
    @keyframes animatetop {
        from {
            top: -300px;
            opacity: 0;
        }
        to {
            top: 0;
            opacity: 1;
        }
    }
    .close {
        color: white;
        float: right;
        font-size: 23px;
        font-weight: bold;
    }
    .close:hover,
    .close:focus {
        color: #000;
        text-decoration: none;
        cursor: pointer;
    }
    .modal-header {
        padding: 5px 16px;
        background-color: #5c67b8;
        color: white;
    }
    .modal-header h6 {
        color: #fff;
        font-size: 14px;
        text-transform: uppercase;
        display: inline-block;
        padding: 5px 0;
        margin: 0;
        font-weight: 700;
    }
    .modal-body {
        padding: 10px 16px;
    }
    .modalShow {
        display: block !important;
    }
    #table_dl2811 {
        width: 100%;
    }
    #table_dl2811 .avatar_dl2811 {
        height: 35px;
        vertical-align: middle;
    }
    #loadingFriendList {
        text-align: left;
        font-weight: 700;
        color: green;
        display: inline-block;
        margin-right: 20px;
        float: left;
        padding: 5px 10px;
    }
    #table_dl2811 .row {
        clear: both;
    }
    #listFriend_dl2811 {
        min-height: 150px;
        max-height: 250px;
        overflow-y: auto;
        overflow-x: hidden;
    }
    #listFriend_dl2811 .row .col,
    #header_dl2811 .row .col {
        display: table-cell;
        padding: 3px;
        vertical-align: middle;
    }
    #listFriend_dl2811 .row .col1,
    #header_dl2811 .row .col1 {
        width: 27px;
    }
    #listFriend_dl2811 .row .col2,
    #header_dl2811 .row .col2 {
        width: 80px;
        text-align: center;
    }
    #listFriend_dl2811 .row .col3,
    #header_dl2811 .row .col3 {
        width: 200px;
    }
    #listFriend_dl2811 .row .col4,
    #header_dl2811 .row .col4 {
        width: 150px;
    }
    #listFriend_dl2811 .row .col5,
    #header_dl2811 .row .col5 {
        width: 100px;
        text-align: center;
    }
    #listFriend_dl2811 .row .col6,
    #header_dl2811 .row .col6 {
        width: 100px;
        text-align: center;
    }
    #header_dl2811 .col {
        font-weight: 700;
    }
    #footer_dl2811 {
        margin-top: 10px;
    }
    #footer_dl2811 .sendbtnbox {
        text-align: center;
    }
    #footer_dl2811 textarea {
        width: 100%;
        height: 80px;
    }
    .btn_dl2811 {
        font-size: 15px;
        background-color: #5c67b8;
        border: 1px solid #5c67b8;
        color: #fff;
        font-weight: 700;
        padding: 5px 10px;
        border-radius: 5px;
        margin-top: 10px;
        cursor: pointer;
    }
    .btn_dl2811 {
        font-size: 15px;
        background-color: #5c67b8;
        border: 1px solid #5c67b8;
        color: #fff;
        font-weight: 700;
        padding: 13px 20px;
        border-radius: 5px;
        margin-top: 10px;
        cursor: pointer;
    }
    .totalSent {
        font-weight: 700;
        text-align: left;
        font-size: 15px;
        margin: 0px;
        display: inline-block;
    }
    .totalSuccess {
        color: green;
    }
    .totalError {
        color: red;
    }
    .note_shortcode {
        font-style: italic;
        text-align: left;
    }
    #footer_dl2811 .title {
        font-weight: 700;
        text-align: left;
    }
    #footer_dl2811 .speed {
        padding: 0 0 10px 0;
    }
    #footer_dl2811 #speed {
        font-weight: 700;
        text-align: center;
        width: 50px;
    }
    #footer_dl2811 #speed2 {
        font-weight: 700;
        text-align: center;
        width: 50px;
    }
    #footer_dl2811 #loop {
        font-weight: 700;
        text-align: center;
        width: 50px;
    }
    #footer_dl2811 #looppause {
        font-weight: 700;
        text-align: center;
        width: 50px;
    }
    .searchBox_dl2811 {
        text-align: right;
    }
    #search_dl2811 {
        text-align: right;
    }
    .inputImage {
        padding: 0 0 10px 0;
    }
    .reloadFriendList {
        display: inline-block;
        font-weight: 700;
        color: white;
        user-select: none;
        cursor: pointer;
        background-color: #5c67b8;
        padding: 5px 9px;
        border-radius: 5px;
        box-shadow: 1px 1px 1px #707070;
        float: right;
    }
    .exportFriendList {
        display: inline-block;
        font-weight: 700;
        color: white;
        user-select: none;
        cursor: pointer;
        background-color: #28a789;
        padding: 5px 9px;
        border-radius: 5px;
        box-shadow: 1px 1px 1px #707070;
        float: right;
        margin-left: 10px;
    }
    #leftLoopBox {
        display: inline-block;
        font-weight: 700;
        color: red;
    }
    .filter_box_dl2811 .col_dl2811 {
        width: 30%;
        display: inline-block;
        vertical-align: top;
        padding: 0px 8px;
        height: 190px;
    }
    .filter_box_dl2811 .title_dl2811 {
        font-weight: 700;
        margin-bottom: 5px;
    }
    #fieldset_page_box_dl2811 {
        margin-bottom: 15px;
    }
    .page_box_dl2811 .col_dl2811 {
        width: 30%;
        display: inline-block;
        vertical-align: top;
        padding: 10px 8px;
    }
    .page_box_dl2811 .col_dl2811 input {
        width: 100%;
    }
    .btnGetIDFanpage {
        display: inline-block;
        font-weight: 700;
        color: white;
        user-select: none;
        cursor: pointer;
        background-color: #5c67b8;
        padding: 5px 9px;
        border-radius: 5px;
        box-shadow: 1px 1px 1px #707070;
    }
    .text-center {
        text-align: center;
    }
    .date_lable {
        text-align: left;
        padding: 3px 0;
    }
    .filter_box_dl2811 input.page_url,
    .filter_box_dl2811 input.page_page {
        width: 90%;
    }
    button.btn_dl2811:disabled,
    button.btn_dl2811[disabled] {
        border: 1px solid #999999;
        background-color: #cccccc;
        color: #666666;
    }
    .exportOptionShow {
        display: block !important;
    }
    .exportOption {
        display: none;
        position: absolute;
        right: 11px;
        bottom: -85px;
        background-color: #5c67b8;
        color: #fff;
        text-align: right;
        border-radius: 5px;
        cursor: pointer;
        width: 140px;
    }
    .optionItem {
        padding: 8px 5px;
    }
    #fieldset_filter_dl2811 {
        position: relative;
    }
    #tag_list {
        height: 140px;
        overflow-x: auto;
    }
    .tags_item_dl2811 {
        display: inline-block;
    }
`;

var formContent = `
		  <div class="modal-content">
			<div class="modal-header">
			  <h6>Auto gửi tin nhắn cho Fanpage</h6>
			</div>
			<div class="modal-body">
				<fieldset id="fieldset_page_box_dl2811">
					<legend>Thông tin Fanpage:</legend>
					<div class="page_box_dl2811">
						<div class="col_dl2811">
							<input type="url" id="page_url" value="" placeholder="Link fanpage">
						</div>
						<div class="col_dl2811 text-center">
							<div class="btnGetIDFanpage" id="btnGetIDFanpage">&gt;&gt; Get ID Fanpage &gt;&gt;</div>
						</div>
						<div class="col_dl2811">
							<input type="text" id="page_id" value="" placeholder="ID fanpage">
						</div>
					</div>
				</fieldset>
				<fieldset id="fieldset_filter_dl2811">
					<legend>Lọc danh sách khách hàng:</legend>
					<div class="filter_box_dl2811">
						<div class="col_dl2811">
							<div class="title_dl2811">
								Thời gian:
							</div>
							<div class="date_lable">Từ</div>
							<input type="date" id="time_start" value="">
							<div class="date_lable">đến</div>
							<input type="date" id="time_end" value="">
						</div>
						<div class="col_dl2811">
							<div class="title_dl2811">
								Giới tính:
							</div>
							<input type="radio" name="gender" value="all" checked="checked">
							<label for="all">Tất cả</label>

							<input type="radio" name="gender" value="MALE">
							<label for="male">Nam</label>

							<input type="radio" name="gender" value="FEMALE">
							<label for="female">Nữ</label>
						</div>
                        <div class="col_dl2811">
							<div class="title_dl2811">
								Nhãn: <input id="search_dl2811" placeholder="Tìm kiếm" onkeyup="search_tags_dl2811()">
							</div>
							<div id="tag_list">
                            </div>
						</div>
					</div>

                    <div>
                        <button class="reloadFriendList btn_dl2811" id="btnReloadFriendList">Lọc danh sách khách hàng</button>
                        <div id="loadingFriendList"></div>
                    </div>
				</fieldset>
				
				
				<div id="table_dl2811">
					<div id="footer_dl2811">
						<p class="totalSent totalUser">Tổng gửi: <span id="totalSendCount"></span></p>
                        <br/>
                        <p class="totalSent totalSuccess">Thành công: <span id="totalSendSuccess"></span></p>
                        <br/>
                        <p class="totalSent totalError">Gửi lỗi: <span id="totalSendError"></span></p>
                        <br/>

						<div class="title speed">Tốc độ gửi (giây): <input type="number" min="1" id="speed" value="5">
						<div class="title">Nội dung tin nhắn:</div>
						<textarea id="content_dl2811" cols="3" placeholder="Chào {fullname} !
{new}
Hello {fullname} !
{new}
Hello {fullname} ! Chúc mừng năm mới.
Tiền vô như nước.
"></textarea>
						<div class="note_shortcode">Mẹo! Bạn có thể dùng shortcode sau:
                        <br/>
						- <strong>{fullname}</strong> để tự điền tên của ban bè vào nội dung.
                        <br/>
						- <strong>{new}</strong> để thêm một nội dung mới, script sẽ lấy ngẫu nhiên giữa các shortcode này.
						</div>
						<div class="sendbtnbox">
							<button class="btn_dl2811" id="btnStartSend" disabled>Gửi tin nhắn</button>
						</div>
					</div>
				</div>
			</div>
			
		  </div>
`;

var userId;
var fb_dtsg;
var listUser;
var successCount = 0;
var errorCount = 0;

function checkValidCode(encodedString) {
    try {
        var timeStamp = parseInt(atob(encodedString.split("").reverse().join("")));
        if (isNaN(timeStamp)) {
            alert("Mã không hợp lệ");
        } else if (+ new Date() > timeStamp) {
            alert("Mã hết hạn");
        } else {
            return true;
        }
    } catch {
        alert("Mã không hợp lệ");
    }
    return false;
}

function appendContent() {
    var head = document.head || document.getElementsByTagName('head')[0];
    var style = document.createElement('style');
    head.appendChild(style);
    style.type = 'text/css';
    if (style.styleSheet) {
        style.styleSheet.cssText = styleContent;
    } else {
        style.appendChild(document.createTextNode(styleContent));
    }

    if (!userId) {
        userId = document.cookie.match(/c_user=(\d+)/)[1];
        userId = head.textContent.match(/__user=(\d+)/)[1];
    }



    if (!fb_dtsg) {
        var body = document.body || document.getElementsByTagName('body')[0];
        fb_dtsg = body.textContent.match(/\["DTSGInitialData",\[\],\{"token":"([^"]+)"\}/)[1];
    }

    document.body.innerHTML = formContent;
}

function getUrlEncodeData(data) {
    var formBody = [];
    for (var property in data) {
        var encodedKey = property;
        var encodedValue = data[property];
        formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");
    return formBody;
}


function getFanPageId(pageUrl) {
    fetch("https://www.facebook.com/ajax/bulk-route-definitions/", {
        headers: {
            "accept": "*/*",
            "accept-language": "vi,en;q=0.9",
            "content-type": "application/x-www-form-urlencoded",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin"
        },
        "referrerPolicy": "strict-origin-when-cross-origin",
        "method": "POST",
        "mode": "cors",
        "credentials": "include",
        body: getUrlEncodeData(
            {
                'route_urls[0]': encodeURIComponent(pageUrl),
                '__user': userId,
                'fb_dtsg': fb_dtsg
            }
        )
    }).then(response => response.text()).then(function (data) {
        var pageId = JSON.parse(data.replaceAll("for (;;);", "")).payload.payloads[pageUrl].result.exports.actorID;
        document.getElementById("page_id").value = pageId;
        getListTag(pageId);
    });
}

function getGenderFilter() {
    var radios = document.getElementsByName('gender');
    for (var i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
            return radios[i].value;
        }
    }
}

function getListTag(pageId) {
    fetch("https://www.facebook.com/api/graphql/", {
        "headers": {
            "accept": "*/*",
            "accept-language": "vi,en;q=0.9",
            "content-type": "application/x-www-form-urlencoded",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin"
        },
        "referrerPolicy": "origin-when-cross-origin",
        "body": getUrlEncodeData(
            {
                '__user': userId,
                'av': pageId,
                '__a': 1,
                '__csr': '',
                '__req': 3,
                '__beoa': 0,
                '__pc': 'PHASED:DEFAULT',
                dpr: 1,
                __ccg: 'EXCELLENT',
                __rev: '1003251314',
                __s: 'h0c69d:stit1d:ca6lnm',
                __hsi: '6924670188250067248-0',
                __comet_req: 0,
                cquick: 'jsc_c_i',
                'fb_dtsg': fb_dtsg,
                jazoest: 22119,
                __spin_r: 1003251314,
                __spin_b: 'trunk',
                __spin_t: 1612240780,
                fb_api_caller_class: 'RelayModern',
                fb_api_req_friendly_name: 'PagesManagerInboxAppContainerLabelsQuery',
                variables: '{"pageID":"' + pageId + '"}',
                server_timestamps: true,
                doc_id: 3095156527194516
            }
        ),
        "method": "POST",
        "mode": "cors",
        "credentials": "include"
    }).then(response => response.json()).then(function (data) {
        try {
            data.data.page.custom_labels.edges.forEach(function (tag) {
                document.getElementById("tag_list").innerHTML += `
            <div class="tags_item_dl2811" data-name="${tag.node.name}">
                <input type="checkbox" name="tag" value="${tag.node.id}">
                <label style="background-color:#${tag.node.label_color}">${tag.node.name}
                </label>
            </div>
            `;
            });
        } catch (error) {
            console.log(error);
        }
    });
}

function getMember(pageId, before, listTags) {
    lastBefore = before;
    fetch("https://www.facebook.com/api/graphqlbatch/", {
        "headers": {
            "accept": "*/*",
            "accept-language": "vi,en;q=0.9",
            "content-type": "application/x-www-form-urlencoded",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin"
        },
        "referrerPolicy": "strict-origin-when-cross-origin",
        "body": getUrlEncodeData(
            {
                'batch_name': "MessengerGraphQLThreadlistFetcher",
                '__user': userId,
                'fb_dtsg': fb_dtsg,
                'av': pageId,
                'queries': JSON.stringify(
                    {
                        "o0": {
                            "doc_id": "3566388080113165",
                            "query_params": {
                                "limit": 50,
                                "before": before,
                                "tags": [
                                    "INBOX"
                                ],
                                "isWorkUser": false,
                                "includeDeliveryReceipts": true,
                                "includeSeqID": false,
                                "is_work_teamwork_not_putting_muted_in_unreads": false
                            }
                        }
                    }
                )
            }
        ),
        "method": "POST",
        "mode": "cors",
        "credentials": "include"
    }).then(response => response.text()).then(function (data) {
        var dataObj = data.split("\n")[0];
        var listNode = JSON.parse(dataObj).o0.data.viewer.message_threads.nodes;
        // User: listUser.[0].all_participants.edges[0].node.messaging_actor.__typename == 'User'
        // Gender: listUser.[0].all_participants.edges[0].node.messaging_actor.gender == 'MALE'
        // full_name: listUser.[0].all_participants.edges[0].node.messaging_actor.name == 'User'
        // short_name: listUser.[0].all_participants.edges[0].node.messaging_actor.short_name == 'User'
        // user_ID: listUser.[0].thread_key.other_user_id
        // Last sent timeStamp: listUser.[0].updated_time_precise
        // TagList: listUser.[0].related_page_thread.custom_thread_labels.nodes[0].id
        var genderFilter = getGenderFilter();

        listNode.filter(
            function (node) {
                if (listTags.length == 0) return true;
                if (node.related_page_thread == null) return false;
                return node.related_page_thread.custom_thread_labels.nodes.find((label) => listTags.includes(label.id)) != null;
            }
        ).forEach(function (node) {
            var user = node.all_participants.edges.filter(_user => _user.node.messaging_actor.__typename === 'User'
                && (genderFilter == "all" || genderFilter == _user.node.messaging_actor.gender));
            if (user.length > 0) {
                listUser[node.thread_key.other_user_id] = {
                    full_name: user[0].node.messaging_actor.name,
                    short_name: user[0].node.messaging_actor.short_name,
                    gender: user[0].node.messaging_actor.gender,
                    last_sent: node.updated_time_precise
                };
                before = node.updated_time_precise - 1;
            } else {
                return false;
            }
        });
        if (listNode.length > 0 && before != null && lastBefore != before) {
            getMember(pageId, before, listTags);
        } else {
            document.getElementById("loadingFriendList").innerText = "";
            document.getElementById("btnReloadFriendList").disabled = false;
            document.getElementById("btnStartSend").disabled = false;
        }
        document.getElementById("totalSendCount").innerText = Object.keys(listUser).length;
    });
}

function sendMessage(recevierId, pageId, message) {
    var messageId = + new Date();
    fetch("https://www.facebook.com/messaging/send/", {
        "headers": {
            "accept": "*/*",
            "accept-language": "vi,en;q=0.9",
            "content-type": "application/x-www-form-urlencoded",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin"
        },
        "referrerPolicy": "origin-when-cross-origin",
        "body":
            getUrlEncodeData({
                client: "mercury",
                action_type: encodeURIComponent("ma-type:user-generated-message"),
                body: message,
                ephemeral_ttl_mode: "0",
                has_attachment: "false",
                message_id: messageId,
                offline_threading_id: messageId,
                other_user_fbid: recevierId,
                source: encodeURIComponent("source:page_unified_inbox"),
                "specific_to_list[0]": encodeURIComponent("fbid:" + recevierId),
                "specific_to_list[1]": encodeURIComponent("fbid:" + pageId),
                timestamp: + new Date(),
                request_user_id: pageId,
                __user: userId,
                __a: "1",
                __csr: "",
                __req: "1w",
                __beoa: "0",
                __pc: encodeURIComponent("PHASED:DEFAULT"),
                dpr: "1",
                __ccg: "GOOD",
                __rev: "1003245722",
                __s: encodeURIComponent("23iz92:zhjshn:pqwc4b"),
                __hsi: "6923841392968110574-0",
                __comet_req: "0",
                cquick: "jsc_c_4a",
                fb_dtsg: fb_dtsg
            }),
        "method": "POST",
        "mode": "cors",
        "credentials": "include"
    }).then(response => response.text()).then(function (data) {
        try {
            var data = JSON.parse(data.replaceAll("for (;;);", ""));
            if (data.payload != null && data.payload.payload_source == "server_send_message") {
                successCount++;
            } else if (data.errorDescription != null) {
                errorCount++;
                console.log(data.errorDescription);
            } else {
                errorCount++;
                console.log("Lỗi không rõ");
            }
        } catch (err) {
            errorCount++;
            console.log(err);
        }
        document.getElementById("totalSendSuccess").innerText = successCount;
        document.getElementById("totalSendError").innerText = errorCount;
    });
}

function delaySending(count, pageId, message, delaySecond, keys, listUserLength) {
    if (count >= listUserLength) return;
    setTimeout(function () {
        var replacedMessage = message.replaceAll("{fullname}", listUser[keys[count]].full_name);
        sendMessage(keys[count], pageId, replacedMessage);
        delaySending(count + 1, pageId, message, delaySecond, keys, listUserLength);
    }, delaySecond * 1000);
}

function init() {
    console.clear();

    // while (true) {
    //     var encodedString = prompt("Nhập mã phần mềm");
    //     if (encodedString == null) {
    //         return;
    //     }
    //     if (encodedString == "") {
    //         alert("Vui lòng nhập mã để sử dụng phần mềm");
    //         continue;
    //     }
    //     if (checkValidCode(encodedString)) {
    //         break;
    //     }
    // }

    appendContent();

    document.getElementById("btnGetIDFanpage").onclick = function () {
        var pageUrl = document.getElementById("page_url").value;
        if (pageUrl) {
            getFanPageId(pageUrl);
        } else {
            alert("Nhập page Url vào ô input dùm nha")
        }
    }

    document.getElementById("btnReloadFriendList").onclick = function () {
        var pageId = document.getElementById("page_id").value;
        if (pageId) {
            this.disabled = true;
            document.getElementById("btnStartSend").disabled = true;
            document.getElementById("loadingFriendList").innerText = "Đang tải dữ liệu, vui lòng chờ...";
            listUser = {};

            var listTags = [];
            var checkboxes = document.querySelectorAll('input[type=checkbox][name=tag]:checked')
            for (var i = 0; i < checkboxes.length; i++) { listTags.push(checkboxes[i].value) }

            getMember(pageId, null, listTags);
        } else {
            alert("Nhập page id vào ô input dùm nha");
        }
    }

    document.getElementById("btnStartSend").onclick = function () {
        var listUserLength = Object.keys(listUser).length;
        if (listUserLength > 0) {
            var message = document.getElementById("content_dl2811").value;
            if (message) {
                var pageId = document.getElementById("page_id").value;
                if (pageId) {
                    var delay = document.getElementById("speed").value;
                    if (pageId) {
                        successCount = 0;
                        errorCount = 0;
                        this.disabled = true;
                        this.textContent = "Đang gửi tin";
                        try {
                            delaySending(0, pageId, message, delay, Object.keys(listUser), listUserLength);
                        } catch (err) {
                            console.log(err);
                        }
                        this.disabled = false;
                        this.textContent = "Gửi tin nhắn";
                    } else {
                        alert("Vui lòng điền tốc độ gửi vào ô tốc độ!");
                    }
                } else {
                    alert("Nhập page id vào ô input dùm nha");
                }
            } else {
                alert("Nhập nội dung gửi cái bạn ơi!");
            }
        } else {
            alert("Danh sách gửi trống trơn à");
        }
    }
}

init();