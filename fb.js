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
    .zui-table {
        border: solid 1px #DDEEEE;
        border-collapse: collapse;
        border-spacing: 0;
        width: 100%;
        font: normal 13px Arial, sans-serif;
    }
    .zui-table thead th {
        background-color: #DDEFEF;
        border: solid 1px #DDEEEE;
        color: #336B6B;
        padding: 10px;
        text-align: left;
        text-shadow: 1px 1px 1px #fff;
    }
    .zui-table tbody td {
        border: solid 1px #DDEEEE;
        color: #333;
        padding: 10px;
        text-shadow: 1px 1px 1px #fff;
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
	.scrollAble {
		height: 140px;
		overflow-x: auto;
	}
	#btnReloadPreview {
		padding: 5px;
	}
	.selectList {
		width: 100%;
	}
	.tags_item_dl2811 {
		display: inline-block;
	}
    #btnStopSend {
        background-color: red;
        margin-right: 10px;
    }
    #btnStopSend:disabled,
	#btnStopSend[disabled] {
		background-color: lightcoral;
		color: aliceblue;
	}
`;

var formContent = `
		  <div class="modal-content">
			<div class="modal-header">
			  <h6>Auto g???i tin nh???n cho Fanpage</h6>
			  <h6 style="float: right;">H??? tr??? Zalo: 089 9265710</h6>
			</div>
			<div class="modal-body">
				<fieldset id="fieldset_page_box_dl2811">
					<legend>Th??ng tin Fanpage:</legend>
					<div class="page_box_dl2811">
						<div class="col_dl2811 text-center">
							<div class="btnGetIDFanpage" id="btnGetIDFanpage">&gt;&gt; L???y ID Fanpage &gt;&gt;</div>
						</div>
						<div class="col_dl2811">
							<input type="text" id="page_id" value="" placeholder="ID fanpage">
						</div>
					</div>
				</fieldset>
				<fieldset id="fieldset_filter_dl2811">
					<legend>L???c danh s??ch kh??ch h??ng:</legend>
					<div class="filter_box_dl2811">
						<div class="col_dl2811">
							<div class="title_dl2811">
								Th???i gian:
							</div>
							<div class="date_lable">T???</div>
							<input type="date" id="time_start" value="">
							<div class="date_lable">?????n</div>
							<input type="date" id="time_end" value="">
						</div>
						<div class="col_dl2811">
							<div class="title_dl2811">
								Gi???i t??nh:
							</div>
                            <div>
                                <input type="radio" name="gender" value="all" checked="checked">
                                <label for="all">T???t c???</label>
                            </div>

                            <div>
                                <input type="radio" name="gender" value="MALE">
                                <label for="male">Nam</label>
                            </div>

                            <div>
                                <input type="radio" name="gender" value="FEMALE">
                                <label for="female">N???</label>
                            </div>

                            <div>
                                <input type="radio" name="gender" value="NEUTER">
                                <label for="NEUTER">LGBT</label>
                            </div>

                            <div>
                                <input type="radio" name="gender" value="others">
                                <label for="others">Ng?????i d??ng b??? block</label>
                            </div>
						</div>
						<div class="col_dl2811">
							<div class="title_dl2811">
								Nh??n: <input id="search_dl2811" placeholder="T??m ki???m" onkeyup="search_tags_dl2811()">
							</div>
							<div id="tag_list" class="scrollAble">
							</div>
						</div>
					</div>

					<div>
						<button class="reloadFriendList btn_dl2811" id="btnReloadFriendList">L???c danh s??ch kh??ch h??ng</button>
						<div id="loadingFriendList"></div>
					</div>
				</fieldset>

				<fieldset id="fieldset_random_content_dl2811">
					<legend>B???ng d??? li???u n???i dung ng???u nhi??n:</legend>
					<div class="filter_box_dl2811">
						<div class="col_dl2811" style="height: 220px">
							<div class="title_dl2811">Danh s??ch t??n bi???n: </div>
							<select id="listContentKey" multiple size="7" class="selectList">
							</select>
							<input id="txtContentKey" placeholder="T??n bi???n" style="width: 100%; box-sizing: border-box;">
							<button class="reloadFriendList btn_dl2811" id="btnAddContentKey">Th??m bi???n</button>
							<button class="reloadFriendList btn_dl2811" id="btnDeleteContentKey" style="background-color: red;margin-right: 10px;">Xo??</button>
						</div>
						<div class="col_dl2811">
							<div class="title_dl2811">
								Danh s??ch n???i dung bi???n:
							</div>
							<select id="listContentValue" multiple size="7" class="selectList">
							</select>
							<input id="txtContentValue" placeholder="N???i dung bi???n" style="width: 100%; box-sizing: border-box;">
							<button class="reloadFriendList btn_dl2811" id="btnAddContentValue">Th??m n???i dung</button>
							<button class="reloadFriendList btn_dl2811" id="btnDeleteContentValue" style="background-color: red;margin-right: 10px;">Xo??</button>
						</div>
						<div class="col_dl2811">
							<div class="title_dl2811">Xem tr?????c</div>
							<textarea id="previewContent" class="scrollAble" style="width:100%" disabled></textarea>
							<button class="reloadFriendList btn_dl2811" id="btnReloadPreview">T???i l???i</button>
						</div>
					</div>
				</fieldset>
				
				<div id="table_dl2811">
					<div id="footer_dl2811">
						<p class="totalSent totalUser">T???ng g???i: <span id="totalSendCount"></span></p>
						<br/>
						<p class="totalSent totalSuccess">Th??nh c??ng: <span id="totalSendSuccess"></span></p>
						<br/>
						<p class="totalSent totalError">G???i l???i: <span id="totalSendError"></span></p>
						<br/>

						<div class="title speed">T???c ????? g???i (gi??y): <input type="number" min="1" id="speed" value="100"/> - <input type="number" min="1" id="speed2" value="200">
						<div class="title">N???i dung tin nh???n:</div>
						<textarea id="content_dl2811" cols="3" placeholder="Ch??o {fullname} !
{randomContent}
Hello {fullname} !
{randomContent}
Hello {fullname} ! Ch??c m???ng n??m m???i.
Ti???n v?? nh?? n?????c.
"></textarea>
						<div class="note_shortcode">M???o! B???n c?? th??? d??ng shortcode sau:
						<br/>
						- <strong>{fullname}</strong> ????? t??? ??i???n t??n c???a ban b?? v??o n???i dung.
						<br/>
						- <strong>{randomContent}</strong> ????? th??m m???t n???i dung m???i, script s??? l???y ng???u nhi??n gi???a c??c shortcode n??y.
						</div>
						<div class="sendbtnbox">
							<button class="btn_dl2811" id="btnStartSend" disabled>G???i tin nh???n</button>
							<button class="btn_dl2811" id="btnStopSend" disabled>D???ng</button>
						</div>
					</div>
				</div>
			</div>
			
		  </div>
`;

var formContent2 = `
		  <div class="modal-content">
			<div class="modal-header">
			  <h6>Auto g???i tin nh???n cho b???n b??</h6>
			  <h6 style="float: right;">H??? tr??? Zalo: 089 9265710</h6>
			</div>
			<div class="modal-body">
				<fieldset id="fieldset_filter_dl2811">
					<legend>L???c danh s??ch b???n b??:</legend>
                    <div class="scrollAble" id="friend_list_wrapper" style="height: 500px;">
                        <table class="zui-table">
                            <thead>
                                <tr>
                                    <th><input type="checkbox" onclick='handleSelectAllFriend(this.checked);'></th>
                                    <th>Image</th>
                                    <th>T??n</th>
                                    <th>UID</th>
                                    <th>Tr???ng th??i</th>
                                </tr>
                            </thead>
                            <tbody id="friend_list" >
                            </tbody>
                        </table>
                    </div>

					<div>
						<button class="reloadFriendList btn_dl2811" id="btnReloadFriendList">L???c danh s??ch</button>
						<div id="loadingFriendList"></div>
					</div>
				</fieldset>

                <fieldset id="fieldset_random_content_dl2811">
					<legend>Th??m user b???ng tay:</legend>
                    <input id="txtAddUserId" placeholder="UserId" style="width: 100%; box-sizing: border-box;">
                    <button class="reloadFriendList btn_dl2811" id="btnAddUserId">Th??m user</button>
				</fieldset>

				<fieldset id="fieldset_random_content_dl2811">
					<legend>B???ng d??? li???u n???i dung ng???u nhi??n:</legend>
					<div class="filter_box_dl2811">
						<div class="col_dl2811" style="height: 220px">
							<div class="title_dl2811">Danh s??ch t??n bi???n: </div>
							<select id="listContentKey" multiple size="7" class="selectList">
							</select>
							<input id="txtContentKey" placeholder="T??n bi???n" style="width: 100%; box-sizing: border-box;">
							<button class="reloadFriendList btn_dl2811" id="btnAddContentKey">Th??m bi???n</button>
							<button class="reloadFriendList btn_dl2811" id="btnDeleteContentKey" style="background-color: red;margin-right: 10px;">Xo??</button>
						</div>
						<div class="col_dl2811">
							<div class="title_dl2811">
								Danh s??ch n???i dung bi???n:
							</div>
							<select id="listContentValue" multiple size="7" class="selectList">
							</select>
							<input id="txtContentValue" placeholder="N???i dung bi???n" style="width: 100%; box-sizing: border-box;">
							<button class="reloadFriendList btn_dl2811" id="btnAddContentValue">Th??m n???i dung</button>
							<button class="reloadFriendList btn_dl2811" id="btnDeleteContentValue" style="background-color: red;margin-right: 10px;">Xo??</button>
						</div>
						<div class="col_dl2811">
							<div class="title_dl2811">Xem tr?????c</div>
							<textarea id="previewContent" class="scrollAble" style="width:100%" disabled></textarea>
							<button class="reloadFriendList btn_dl2811" id="btnReloadPreview">T???i l???i</button>
						</div>
					</div>
				</fieldset>
				
				<div id="table_dl2811">
					<div id="footer_dl2811">
						<p class="totalSent totalUser">T???ng g???i: <span id="totalSendCount"></span></p>
						<br/>
						<p class="totalSent totalSuccess">Th??nh c??ng: <span id="totalSendSuccess"></span></p>
						<br/>
						<p class="totalSent totalError">G???i l???i: <span id="totalSendError"></span></p>
						<br/>

						<div class="title speed">T???c ????? g???i (gi??y): <input type="number" min="1" id="speed" value="5">
						<div class="title">N???i dung tin nh???n:</div>
						<textarea id="content_dl2811" cols="3" placeholder="Ch??o {fullname} !
{randomContent}
Hello {fullname} !
{randomContent}
Hello {fullname} ! Ch??c m???ng n??m m???i.
Ti???n v?? nh?? n?????c.
"></textarea>
						<div class="note_shortcode">M???o! B???n c?? th??? d??ng shortcode sau:
						<br/>
						- <strong>{fullname}</strong> ????? t??? ??i???n t??n c???a ban b?? v??o n???i dung.
						<br/>
						- <strong>{randomContent}</strong> ????? th??m m???t n???i dung m???i, script s??? l???y ng???u nhi??n gi???a c??c shortcode n??y.
						</div>
						<div class="sendbtnbox">
							<button class="btn_dl2811" id="btnStartSend" disabled>G???i tin nh???n</button>
							<button class="btn_dl2811" id="btnStopSend" disabled>D???ng</button>
						</div>
					</div>
				</div>
			</div>
			
		  </div>
`;

var userId;
var fb_dtsg;
var listUser;
var successCount = (typeof successCount !== 'undefined' ? successCount : 0);
var errorCount = (typeof errorCount !== 'undefined' ? errorCount : 0);
var initDone = (typeof initDone !== 'undefined' ? initDone : false);
var listContent = (typeof listContent !== 'undefined' ? listContent : {});
var startIndex = (typeof startIndex !== 'undefined' ? startIndex : 0);
var autoSendFanpage = true;
var listFriend;

function checkValidCode(encodedString) {
    try {
        var timeStamp = parseInt(atob(encodedString.split("").reverse().join("")));
        if (isNaN(timeStamp)) {
            alert("M?? kh??ng h???p l???");
        } else if (+ new Date() > timeStamp) {
            alert("M?? h???t h???n");
        } else {
            return true;
        }
    } catch {
        alert("M?? kh??ng h???p l???");
    }
    return false;
}

function handleSelectAllFriend(checked) {
    var checkboxes = document.getElementById("friend_list").querySelectorAll('input[type=checkbox]');

    for (var i = 0; i < checkboxes.length; i++) {
        checkboxes[i].checked = checked;
    }

    if (!checked) {
        listUser[friendId] = {};
    } else {
        for (var friendId in listFriend) {
            listUser[friendId] = {
                full_name: listFriend[friendId].name,
                short_name: null,
                gender: null,
                last_sent: null
            };
        }

        if (Object.keys(listUser).length > 0 && document.getElementById("loadingFriendList").innerText == "") {
            document.getElementById("btnStartSend").disabled = false;
        }
    }
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
    }

    if (!fb_dtsg) {
        var content = document.documentElement.innerHTML;
        if (autoSendFanpage) {
            fb_dtsg = content.match(/\["DTSGInitialData",\[\],\{"token":"([^"]+)"\}/)[1];
        } else {
            fb_dtsg = content.querySelector('input[name=fb_dtsg]').value
        }
    }

    if (autoSendFanpage) {
        document.body.innerHTML = formContent;
    } else {
        document.body.innerHTML = formContent2;
    }
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


function getGenderFilter() {
    var radios = document.getElementsByName('gender');
    for (var i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
            return radios[i].value;
        }
    }
}

function getListTag(pageId) {
    fetch("https://" + window.location.hostname + "/api/graphql/", {
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
            document.getElementById("tag_list").innerHTML = '';
            data.data.page.custom_labels.edges.forEach(function (tag) {
                document.getElementById("tag_list").innerHTML += `
			<div class="tags_item_dl2811" data-name="${tag.node.name}">
				<input type="checkbox" name="tag" value="${tag.node.id}">
				<label style="background-color:#${tag.node.label_color}">${tag.node.name}
				</label>
			</div>
			</br>
			`;
            });
        } catch (error) {
            console.log(error);
        }
    });
}

function getMember(pageId, before, listTags) {
    lastBefore = before;
    fetch("https://" + window.location.hostname + "/api/graphqlbatch/", {
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
            var user = node.all_participants.edges.filter(_user => 
                (
                    _user.node.messaging_actor.__typename === 'User'
                    && (
                        genderFilter === "all" || 
                        genderFilter === _user.node.messaging_actor.gender // FEMALE, MALE, NEUTER
                    )
                ) 
                || (_user.node.messaging_actor.__typename === 'UnavailableMessagingActor' && genderFilter === "others")
            );
            before = node.updated_time_precise - 1;
            if (user.length > 0) {
                listUser[node.thread_key.other_user_id] = {
                    full_name: user[0].node.messaging_actor.name,
                    short_name: user[0].node.messaging_actor.short_name,
                    gender: user[0].node.messaging_actor.gender,
                    last_sent: node.updated_time_precise
                };
            } else {
                return false;
            }
        });
        if (before != null && lastBefore != before) {
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
    fetch(autoSendFanpage ? "https://" + window.location.hostname + "/messaging/send/" : "https://" + window.location.hostname + "/messages/send/", {
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
            autoSendFanpage ? getUrlEncodeData({
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
            }) : getUrlEncodeData({
                [encodeURIComponent("ids[" + recevierId + "]")]: recevierId,
                body: encodeURIComponent(message),
                fb_dtsg: encodeURIComponent(fb_dtsg),
                __a: ""
            }),
        "method": "POST",
        "mode": "cors",
        "credentials": "include"
    }).then(function (response) {
        if (response.status == 200) {
            successCount++;
        } else {
            errorCount++;
            console.log(response.text());
        }
        document.getElementById("totalSendSuccess").innerText = successCount;
        document.getElementById("totalSendError").innerText = errorCount;
        return response.text();
    }).then(function (data) {
        if (autoSendFanpage) {
            try {
                var data = JSON.parse(data.replaceAll("for (;;);", ""));
                if (data.payload != null && data.payload.payload_source == "server_send_message") {
                    successCount++;
                } else if (data.errorDescription != null) {
                    errorCount++;
                    console.log(data.errorDescription);
                } else {
                    errorCount++;
                    console.log("L???i kh??ng r??");
                }
            } catch (err) {
                errorCount++;
                console.log(err);
            }
            document.getElementById("totalSendSuccess").innerText = successCount;
            document.getElementById("totalSendError").innerText = errorCount;
        }
    });
}

function replacedText(message) {
    var replacedMessage = message;
    for (var content in listContent) {
        var listContentValue = listContent[content];
        if (listContentValue.length > 0) {
            var randomContent = Math.floor(Math.random() * listContentValue.length);
            replacedMessage = replacedMessage.replaceAll(
                "{" + content + "}",
                listContentValue[randomContent]
            );
        }
    }
    return replacedMessage;
}

function delaySending(count, pageId, message, speed, speed2, keys, listUserLength) {
    if (count >= listUserLength || !document.getElementById("btnStartSend").disabled) {
        if (count >= listUserLength) {
            startIndex = 0;
            console.log("Reset l???i danh s??ch g???i");
        }
        if (!document.getElementById("btnStartSend").disabled) {
            startIndex = count;
            console.log("Danh s??ch g???i d???ng t???i user th??? " + count);
        }
        document.getElementById("btnStartSend").disabled = false;
        document.getElementById("btnStartSend").innerText = "G???i tin nh???n";
        document.getElementById("btnStopSend").disabled = true;
        return;
    }
    var replacedMessage = message.replaceAll("{fullname}", listUser[keys[count]].full_name);
    replacedMessage = replacedText(replacedMessage);
    var replacedMessageArr = replacedMessage.split(`
---
`);
    replacedMessage = replacedMessageArr[count % replacedMessageArr.length];
    sendMessage(keys[count], pageId, replacedMessage);
    console.log({
        "count": count, "message": replacedMessage
    });
    var delay = getRandomInt(speed, speed2);
    console.log("Delay: ", delay);
    setTimeout(function () {
        delaySending(count + 1, pageId, message, speed, speed2, keys, listUserLength);
    }, delay * 1000);
}

function refreshPreview() {
    var message = document.getElementById("content_dl2811").value;
    document.getElementById("previewContent").innerHTML = replacedText(message);
}

function clearContentList() {
    var listElement = document.getElementById("listContentValue");
    var index, length = listElement.options.length - 1;
    for (index = length; index >= 0; index--) {
        listElement.remove(index);
    }
}

function handleSelectFriend(checked, friendId) {
    if (checked) {
        listUser[friendId] = {
            full_name: listFriend[friendId].name,
            short_name: null,
            gender: null,
            last_sent: null
        };
        if (Object.keys(listUser).length > 0 && document.getElementById("loadingFriendList").innerText == "") {
            document.getElementById("btnStartSend").disabled = false;
        }
    } else {
        delete (listUser[friendId]);
    }
    console.log(listUser);
}

function getListFriend(cursor) {
    fetch("https://" + window.location.hostname + "/api/graphql/", {
        "headers": {
            "accept": "*/*",
            "accept-language": "vi,en;q=0.9",
            "content-type": "application/x-www-form-urlencoded",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin"
        },
        "referrer": "https://" + window.location.hostname + "/leviet.hoa.5/friends",
        "referrerPolicy": "no-referrer-when-downgrade",
        "body": getUrlEncodeData(
            {
                '__user': userId,
                'fb_dtsg': encodeURIComponent(fb_dtsg),
                __a: 1,
                __dyn: '',
                av: userId,
                __csr: "",
                __req: "z",
                __beoa: 0,
                __pc: encodeURIComponent("EXP3:comet_pkg"),
                __bhv: 2,
                dpr: 1,
                __ccg: "GOOD",
                __rev: 1003512393,
                __s: encodeURIComponent("t56q9j:jlb6ea:vv9niz"),
                __hsi: "6943618300727870574-0",
                __comet_req: 1,
                jazoest: 22178,
                __spin_r: 1003512393,
                __spin_b: "trunk",
                __spin_t: 1616687118,
                fb_api_caller_class: "RelayModern",
                fb_api_req_friendly_name: "ProfileCometAppCollectionListRendererPaginationQuery",
                variables: encodeURIComponent(
                    JSON.stringify(
                        {
                            "count": 8,
                            "scale": 2,
                            "search": "",
                            "cursor": cursor,
                            "id": btoa("app_collection:" + userId + ":2356318349:2")
                        })
                ),
                server_timestamps: true,
                doc_id: 3823952151004784
            }
        ),
        "method": "POST",
        "mode": "cors",
        "credentials": "include"
    }).then(function (response) {
        try {
            return response.json();
        } catch (error) {
            document.getElementById("loadingFriendList").innerText = "";
            document.getElementById("btnReloadFriendList").innerText = "L???c danh s??ch";
            document.getElementById("btnReloadFriendList").style.backgroundColor = "";
            document.getElementById("btnStartSend").disabled = false;
        }
    }).then(function (data) {
        try {
            var lastCursor = cursor;
            data.data.node.pageItems.edges.forEach(function (friend) {
                listFriend[friend.node.node.id] = {
                    image: friend.node.image.uri,
                    name: friend.node.title.text,
                    active: friend.node.actions_renderer.action.is_active,
                    uid: friend.node.node.id
                };
                lastCursor = friend.cursor;
                document.getElementById("friend_list").innerHTML += `
                <tr>
                    <td><input type="checkbox" onclick='handleSelectFriend(this.checked, "${friend.node.node.id}");'></td>
                    <td><img src="${friend.node.image.uri}" width="40"></td></td>
                    <td>${friend.node.title.text}</td>
                    <td>${friend.node.node.id}</td>
                    <td>${friend.node.actions_renderer.action.is_active ? "Online" : "Offline"}</td>
                </tr>
                `;
                document.getElementById("friend_list_wrapper").scrollTop = document.getElementById("friend_list_wrapper").scrollHeight;
            });
            if (lastCursor != cursor && document.getElementById("btnReloadFriendList").innerText == "D???ng l???y danh s??ch b???n") {
                getListFriend(lastCursor);
            } else {
                document.getElementById("loadingFriendList").innerText = "";
                document.getElementById("btnReloadFriendList").innerText = "L???c danh s??ch";
                document.getElementById("btnReloadFriendList").style.backgroundColor = "";
                document.getElementById("btnStartSend").disabled = false;
            }
        } catch (error) {
            console.log(error);
            document.getElementById("loadingFriendList").innerText = "";
            document.getElementById("btnReloadFriendList").innerText = "L???c danh s??ch";
            document.getElementById("btnReloadFriendList").style.backgroundColor = "";
            document.getElementById("btnStartSend").disabled = false;
        }
    });
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

function init() {
    console.clear();
    if (initDone) return;

    // if (autoSendFanpage && window.location.hostname != "business.facebook.com") {
    //     alert("Ch????ng tr??nh ch??? ch???y ??? t??n mi???n www.facebook.com");
    //     window.location.href = "https://business.facebook.com";
    //     return;
    // }

    // while (true) {
    //     var encodedString = prompt("Nh???p m?? ph???n m???m");
    //     if (encodedString == null) {
    //         return;
    //     }
    //     if (encodedString == "") {
    //         alert("Vui l??ng nh???p m?? ????? s??? d???ng ph???n m???m");
    //         continue;
    //     }
    //     if (checkValidCode(encodedString)) {
    //         break;
    //     }
    // }

    appendContent();

    if (autoSendFanpage) {
        document.getElementById("btnGetIDFanpage").onclick = function () {
            const urlParams = new URLSearchParams(window.location.search);
            const businessId = urlParams.get('asset_id');
            getListTag(businessId);
            document.getElementById("page_id").value = businessId;
        }
    }


    document.getElementById("btnReloadFriendList").onclick = function () {
        if (autoSendFanpage) {
            var pageId = document.getElementById("page_id").value;
            if (pageId) {
                this.disabled = true;
                startIndex = 0;
                console.log("Reset l???i danh s??ch g???i");
                document.getElementById("btnStartSend").disabled = true;
                document.getElementById("loadingFriendList").innerText = "??ang t???i d??? li???u, vui l??ng ch???...";
                listUser = {};

                var listTags = [];
                var checkboxes = document.querySelectorAll('input[type=checkbox][name=tag]:checked')
                for (var i = 0; i < checkboxes.length; i++) { listTags.push(checkboxes[i].value) }

                getMember(pageId, null, listTags);
            } else {
                alert("Nh???p page id v??o ?? input d??m nha");
            }
        } else {
            if (document.getElementById("btnReloadFriendList").innerText != "D???ng l???y danh s??ch b???n") {
                this.innerText = "D???ng l???y danh s??ch b???n";
                document.getElementById("btnReloadFriendList").style.backgroundColor = "red";
                console.log("Reset l???i danh s??ch g???i");
                document.getElementById("btnStartSend").disabled = true;
                document.getElementById("friend_list").innerText = "";
                document.getElementById("loadingFriendList").innerText = "??ang t???i d??? li???u, vui l??ng ch???...";
                listUser = {};
                listFriend = {};

                getListFriend("");
            } else {
                document.getElementById("loadingFriendList").innerText = "";
                document.getElementById("btnReloadFriendList").innerText = "L???c danh s??ch";
                document.getElementById("btnReloadFriendList").style.backgroundColor = "";
                document.getElementById("btnStartSend").disabled = false;
            }
        }
    }

    document.getElementById("btnStartSend").onclick = function () {
        var listUserLength = Object.keys(listUser).length;
        if (listUserLength > 0) {
            var message = document.getElementById("content_dl2811").value;
            if (message) {
                var speed = document.getElementById("speed").value;
                var speed2 = document.getElementById("speed2").value;
                if (speed && speed2) {
                    var pageId;
                    if (autoSendFanpage) {
                        pageId = document.getElementById("page_id").value;
                        if (!pageId) {
                            alert("Nh???p page id v??o ?? input d??m nha");
                            return;
                        }
                    }
                    successCount = 0;
                    errorCount = 0;
                    try {
                        this.disabled = true;
                        this.innerText = "??ang g???i...";
                        document.getElementById("btnStopSend").disabled = false;
                        delaySending(startIndex, pageId, message, speed, speed2, Object.keys(listUser), listUserLength);
                    } catch (err) {
                        console.log(err);
                    }
                } else {
                    alert("Vui l??ng ??i???n t???c ????? g???i v??o ?? t???c ?????!");
                }

            } else {
                alert("Nh???p n???i dung g???i c??i b???n ??i!");
            }
        } else {
            alert("Danh s??ch g???i tr???ng tr??n ??");
        }
    }

    document.getElementById("btnAddContentKey").onclick = function () {
        var contentKey = document.getElementById("txtContentKey").value;
        if (contentKey && contentKey.trim()) {
            if (!(contentKey in listContent)) {
                var option = document.createElement("option");
                option.value = contentKey;
                option.text = contentKey;
                listContent[contentKey] = [];
                var listElement = document.getElementById("listContentKey");
                listElement.options.add(option);
                listElement.scrollTop = listElement.scrollHeight - listElement.clientHeight;
                listElement.selectedIndex = listElement.length - 1;

                clearContentList();
                refreshPreview();
            }
        } else {
            alert("Nh???p t??n bi???n v??o ?? input d??m nha");
        }
    }

    document.getElementById("btnAddUserId").onclick = function () {
        var contentKey = document.getElementById("txtAddUserId").value;
        if (contentKey && contentKey.trim()) {
            if (typeof listFriend === 'undefined') {
                listFriend = {};
            }
            if (typeof listUser === 'undefined') {
                listUser = {};
            }
            if (!(contentKey in listFriend)) {
                listFriend[contentKey] = {
                    image: "https://av.olm.vn/images/avt/avt3/avt485653_256by256.jpg",
                    name: "User_" + contentKey,
                    active: "Unknown",
                    uid: contentKey
                };
                document.getElementById("friend_list").innerHTML += `
                <tr>
                    <td><input type="checkbox" onclick='handleSelectFriend(this.checked, "${contentKey}");'></td>
                    <td><img src="https://av.olm.vn/images/avt/avt3/avt485653_256by256.jpg" width="40"></td></td>
                    <td>User_${contentKey}</td>
                    <td>${contentKey}</td>
                    <td>Unknown</td>
                </tr>
                `;
                document.getElementById("friend_list_wrapper").scrollTop = document.getElementById("friend_list_wrapper").scrollHeight;
            }
        } else {
            alert("Nh???p t??n user v??o ?? input d??m nha");
        }
    }

    document.getElementById("btnDeleteContentKey").onclick = function () {
        var listContentKeyElement = document.getElementById("listContentKey");
        if (listContentKeyElement.selectedOptions.length > 0) {
            delete (listContent[listContentKeyElement.value]);
            listContentKeyElement.remove(listContentKeyElement.selectedIndex);

            clearContentList();
            refreshPreview();
        } else {
            alert("Danh s??ch bi???n tr???ng m??");
        }
    }

    document.getElementById("listContentKey").onchange = function (value) {
        clearContentList();
        listContent[this.value].forEach(function (optionValue) {
            var option = document.createElement("option");
            option.value = optionValue;
            option.text = optionValue;
            listContentValue.options.add(option);
        });
    }

    document.getElementById("btnAddContentValue").onclick = function () {
        var listContentKeyOptions = document.getElementById("listContentKey").selectedOptions;
        if (listContentKeyOptions.length > 0) {
            var contentKey = listContentKeyOptions[0].value;
            var contentValue = document.getElementById("txtContentValue").value;
            if (contentValue && contentValue.trim()) {
                if (listContent[contentKey].indexOf(contentValue) == -1) {
                    var option = document.createElement("option");
                    option.value = contentValue;
                    option.text = contentValue;
                    listContent[contentKey].push(contentValue);
                    var listElement = document.getElementById("listContentValue");
                    listElement.options.add(option);
                    listElement.scrollTop = listElement.scrollHeight - listElement.clientHeight;
                    listElement.selectedIndex = listElement.length - 1;
                    refreshPreview();
                }
            } else {
                alert("Nh???p gi?? tr??? bi???n v??o ?? input d??m nha");
            }
        } else {
            alert("Ch???n t??n bi???n c???n ????? th??m gi?? tr??? ???? nha");
        }
    }

    document.getElementById("btnDeleteContentValue").onclick = function () {
        var listContentValueElement = document.getElementById("listContentValue");
        if (listContentValueElement.selectedOptions.length > 0) {
            var listContentKeyElement = document.getElementById("listContentKey");
            delete (listContent[listContentKeyElement.value][listContentValueElement.selectedIndex]);
            listContentValueElement.remove(listContentValueElement.selectedIndex);
            refreshPreview();
        } else {
            alert("Danh s??ch gi?? tr??? bi???n tr???ng m??");
        }
    }

    document.getElementById("btnReloadPreview").onclick = function () {
        refreshPreview();
    }

    document.getElementById("btnReloadPreview").onclick = function () {
        refreshPreview();
    }

    document.getElementById("content_dl2811").onkeyup = function () {
        startIndex = 0;
        console.log("Reset l???i danh s??ch g???i");
        refreshPreview();
    }

    document.getElementById("btnStopSend").onclick = function () {
        if (document.getElementById("btnStartSend").disabled) {
            document.getElementById("btnStartSend").disabled = false;
            document.getElementById("btnStartSend").innerText = "G???i tin nh???n";
            this.disabled = true;
        }
    }

    initDone = true;
}

init();
