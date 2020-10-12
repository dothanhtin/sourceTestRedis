$(document).ready(function () {
    //#region init
    //var link = "http://localhost:55567";
    //var link = "http://localhost:44300";
    //var link = "http://222.255.102.205:5001";
    var link = "https://orimx-dev.vdc2.com.vn/kong";
    //var link = "https://orimx-demo.vnptit.vn/kong";
    //var link = "https://orimx.vnptit.vn/kong";
    //var link = "http://10.159.135.71:81";
    var chooseButton = 0;
    var ID = 0;
    var dialog = $("#dialog").kendoWindow({
        draggable: false,
        modal: true,
        resizable: false,
        visible: false,
        width: "600",
        height: "300",
        actions: ["Close"]
    }).data("kendoWindow");
    //#endregion

    //#region grid
    //tk_grid = $('#grid').kendoGrid({
    //    dataSource: {

    //        pageSize: 10,
    //        transport: {
    //            read: {
    //                //url: '../SampleCode/getAll',
    //                url: link + "/api/core/category/all
    //                type: 'GET',
    //                //dataType: "json",
    //                //headers: { "test-value": "202e272a-ea86-4450-94db-4570075b4a22" }
    //                beforeSend: function (xhr) {
    //                    xhr.setRequestHeader('token', '202e272a-ea86-4450-94db-4570075b4a22');
    //                },
    //            }
    //        }
    //    },
    //    pageable: true,
    //    selectable: "multiple row",
    //    scrollabel: false,
    //    persistSelection: true,
    //    groupable: false,
    //    columns: [
    //        {
    //            field: "name",
    //            title: "name",
    //            headerAttributes: {
    //                style: "font-weight:bold;text-align:center;"
    //            },
    //            attributes: {
    //                "class": "table-cell",
    //                style: "text-align: center;"
    //            }
    //        },
    //        {
    //            field: "code",
    //            title: "code",
    //            headerAttributes: {
    //                style: "font-weight:bold;text-align:center;"
    //            },
    //            attributes: {
    //                "class": "table-cell",
    //                style: "text-align: center;"
    //            }
    //        },
    //        {
    //            field: "partition",
    //            title: "partition",
    //            headerAttributes: {
    //                style: "font-weight:bold;text-align:center;"
    //            },
    //            attributes: {
    //                "class": "table-cell",
    //                style: "text-align: center;"
    //            }
    //        }

    //    ]
    //}).data("kendoGrid");

    //#endregion

    //#region old code
    //$("#chat").kendoChat({
    //    toolbar: {
    //        toggleable: true,
    //        scrollable: true,
    //        animation: {
    //            collapse: {
    //                effects: "expandVertical fadeIn",
    //                duration: 500
    //            },
    //            expand: {
    //                effects: "expandVertical fadeIn",
    //                duration: 500
    //            }
    //        },
    //        buttons: [
    //            { name: "ButtonA", iconClass: "k-icon k-i-image" },
    //            { name: "ButtonB", iconClass: "k-icon k-i-wrench" }
    //        ]
    //    }
    //}).data("kendoChat");
    //#endregion

    //Send message new call api
    $("#btn_sendMessage").click(function () {

        var x = $('#n_request').val();
        for (var i = 0; i <= Number(x); i++) {
            var data = {
                event: "sendmsg",
                timestamp: "1559027868557",
                oaid: "2659280042717887087",
                appid: "1691033564111571589",
                uid: "test" + i,
                msgid: "fc142abd0909a456fd19",
                message: "nội dung tin nhắn " + i,
                username: "Tran Phat",
                avatar: "http://s120.avatar.talk.zdn.vn/f/6/7/c/10/120/b522d3d1f4f92091ddad3bd8f84f15bc.jpg",
                appname: "ORIM",
                apptype: "Zalo"
            }
            //data.uid += i;
            //data.message += i;
            $.ajax({
                type: "POST",
                url: link + '/api/core/zalo/v2/receiveText',
                data: JSON.stringify(data),
                dataType: "json",
                contentType: "application/json;charset=utf-8",
                success: function (data) {
                    console.log(data);
                    console.log("count request: " + i);
                },
                error: function (response) {
                    alert(response);
                }
            });
        }
    });

    var isRun = false;
    $('#btn_RunAuto').click(function (event) {
        var t0 = performance.now();
        event.preventDefault();
        isRun = true;
        var x = $('#n_request').val();
        var i = 0;
        $('#btn_RunAuto').hide();
        $('#btn_StopAuto').show();

        //Delay 500
        //test();
        //for (let i = 0; i < x; i++) {
        //    task(i);
        //}


        //#region non delay
        while (isRun) {
            var timeAll = 0;
            if (i < Number(x)) {
                i++;
                //Auto with diff user
                var data = {
                    event: "sendmsg",
                    timestamp: "1559027868557",
                    oaid: "2659280042717887087",
                    appid: "1691033564111571589",
                    uid: "test" + i,
                    msgid: "fc142abd0909a456fd19",
                    message: "nội dung tin nhắn " + i,
                    username: "Tran Phat " + i,
                    avatar: "http://s120.avatar.talk.zdn.vn/f/6/7/c/10/120/b522d3d1f4f92091ddad3bd8f84f15bc.jpg",
                    appname: "ORIM",
                    apptype: "Zalo"
                }
                //Auto with one user
                //var data = {
                //    event: "sendmsg",
                //    timestamp: "1559027868557",
                //    oaid: "2659280042717887087",
                //    appid: "1691033564111571589",
                //    uid: "test",
                //    msgid: "fc142abd0909a456fd19",
                //    message: "nội dung tin nhắn " + i,
                //    username: "Tran Phat",
                //    avatar: "http://s120.avatar.talk.zdn.vn/f/6/7/c/10/120/b522d3d1f4f92091ddad3bd8f84f15bc.jpg",
                //    appname: "ORIM",
                //    apptype: "Zalo"
                //}
                //var t2 = performance.now();
                $.ajax({
                    type: "POST",
                    url: link + '/api/core/zalo/v2/receiveText',
                    data: JSON.stringify(data),
                    dataType: "json",
                    contentType: "application/json;charset=utf-8",
                    success: function (data) {
                        console.log(data);
                        //var t3 = performance.now();
                        //timeAll = timeAll + (t3 - t2);
                        //console.log("Call to send request ajax from client CRM took " + timeAll + " milliseconds.");
                    },
                    error: function (response) {
                        alert(response);
                        //var t4 = performance.now();
                        //timeAll = timeAll + (t4 - t2);
                        //console.log("Call to send request ajax from client CRM took " + timeAll + " milliseconds.");
                    }
                });
            }
            else {
                timeAll = 0;
                break;
            }
        }
        //#endregion

        var t1 = performance.now();
        console.log("Call to send message from client CRM took " + (t1 - t0) + " milliseconds.")
    });


    function task(i) {
        setTimeout(function () {
            var data = {
                event: "sendmsg",
                timestamp: "1559027868557",
                oaid: "2659280042717887087",
                appid: "1691033564111571589",
                uid: "test",
                msgid: "fc142abd0909a456fd19",
                message: "nội dung tin nhắn " + i,
                username: "Tran Phat",
                avatar: "http://s120.avatar.talk.zdn.vn/f/6/7/c/10/120/b522d3d1f4f92091ddad3bd8f84f15bc.jpg",
                appname: "ORIM",
                apptype: "Zalo"
            }
            //var t2 = performance.now();
            $.ajax({
                type: "POST",
                url: link + '/api/core/zalo/v2/receiveText',
                data: JSON.stringify(data),
                dataType: "json",
                contentType: "application/json;charset=utf-8",
                success: function (data) {
                    //console.log(data);
                    //var t3 = performance.now();
                    //timeAll = timeAll + (t3 - t2);
                    //console.log("Call to send request ajax from client CRM took " + timeAll + " milliseconds.");
                },
                error: function (response) {
                    alert(response);
                    //var t4 = performance.now();
                    //timeAll = timeAll + (t4 - t2);
                    //console.log("Call to send request ajax from client CRM took " + timeAll + " milliseconds.");
                }
            });
        }, 500);
    }


    function test() {
        var i = 0;
        setTimeout(function () {   //  call a 3s setTimeout when the loop is called
            //Auto with one user
            var data = {
                event: "sendmsg",
                timestamp: "1559027868557",
                oaid: "2659280042717887087",
                appid: "1691033564111571589",
                uid: "test",
                msgid: "fc142abd0909a456fd19",
                message: "nội dung tin nhắn " + i,
                username: "Tran Phat",
                avatar: "http://s120.avatar.talk.zdn.vn/f/6/7/c/10/120/b522d3d1f4f92091ddad3bd8f84f15bc.jpg",
                appname: "ORIM",
                apptype: "Zalo"
            }
            //var t2 = performance.now();
            $.ajax({
                type: "POST",
                url: link + '/api/core/zalo/v2/receiveText',
                data: JSON.stringify(data),
                dataType: "json",
                contentType: "application/json;charset=utf-8",
                success: function (data) {
                    //console.log(data);
                    //var t3 = performance.now();
                    //timeAll = timeAll + (t3 - t2);
                    //console.log("Call to send request ajax from client CRM took " + timeAll + " milliseconds.");
                },
                error: function (response) {
                    alert(response);
                    //var t4 = performance.now();
                    //timeAll = timeAll + (t4 - t2);
                    //console.log("Call to send request ajax from client CRM took " + timeAll + " milliseconds.");
                }
            });
            i++;                    //  increment the counter
            if (i < 10) {           //  if the counter < 10, call the loop function
                test();             //  ..  again which will trigger another 
            }                       //  ..  setTimeout()
        }, 500)
    }

    $('#btn_StopAuto').click(function () {
        isRun = true;
        var x = Number($('#n_request').val());
        $('#btn_RunAuto').show();
        $('#btn_StopAuto').hide();
    });

    $('#btn_clearPrefixKey').click(function () {
        var data = {prefix: "hubchatconnected_"};
        $.ajax({
            type: "POST",
            url: link + '/api/core/textmessage/removeprefixchathub',
            data: JSON.stringify(data),
            dataType: "json",
            contentType: "application/json;charset=utf-8",
            success: function (data) {
                console.log(data);
                alert("OK");
            },
            error: function (response) {
                alert(response);
            }
        });
    });

    $('#btn_checkExistKey').click(function () {
        var data = {key: "hubchatconnected_" + $('#txt_key').val() };
        $.ajax({
            type: "POST",
            url: link + '/api/core/textmessage/checkexistkey',
            data: JSON.stringify(data),
            dataType: "json",
            contentType: "application/json;charset=utf-8",
            success: function (data) {
                console.log(data);
                alert("ok");
            },
            error: function (response) {
                alert(response);
            }
        });
    });

    $('#btn_FlushAll').click(function () {
        var data = { isFlushAll: true }
        $.ajax({
            type: "POST",
            url: link + '/api/core/textmessage/flushallkeyredis',
            data: JSON.stringify(data),
            dataType: "json",
            contentType: "application/json;charset=utf-8",
            success: function (data) {
                console.log(data);
                alert(data);
            },
            error: function (response) {
                alert(response);
            }
        });
    });

    //#region button CRUD

    //Add
    $('#btn_add').click(function () {
        clearForm();
        dialog.open().center();
        chooseButton = 0;

    });

    //Edit
    $('#btn_edit').click(function () {
        var selectedItem = tk_grid.dataItem(tk_grid.select());
        if (selectedItem == null) {
            $("#grid").notify("Hãy chọn 1 tin tức để xem...", { position: "bottom right", className: "info" });
        }
        else {
            dialog.open().center();
            $('#ten').val(selectedItem.NAME);
            $('#des').val(selectedItem.DESCRIPTION);
            ID = Number(selectedItem.ID);
            chooseButton = 1;
        }

    });

    //Save
    $('#btn_save').click(function () {
        //Add
        if (chooseButton == 0) {
            data = { 'name': $('#ten').val(), 'descript': $('#des').val() }
            $.ajax({
                type: "POST",
                url: '../SampleCode/addRecord',
                data: JSON.stringify(data),
                dataType: "json",
                contentType: "application/json;charset=utf-8",
                success: function (data) {
                    if (data == "1") {
                        tk_grid.dataSource.read();
                    }
                    //clearForm();
                    dialog.close();
                    $("#grid").notify("Cập nhật thành công!", { position: "bottom right", className: "success" });
                },
                error: function (response) {
                    alert(response);
                    //location.reload();
                }
            });
        }
        else if (chooseButton == 1) {
            data = { 'ID': ID, 'name': $('#ten').val(), 'descript': $('#des').val() }
            $.ajax({
                type: "POST",
                url: '../SampleCode/editRecord',

                data: JSON.stringify(data),
                dataType: "json",
                contentType: "application/json;charset=utf-8",
                success: function (data) {
                    if (data == "1")
                        tk_grid.dataSource.read();
                    //clearForm();
                    dialog.close();
                    $("#grid").notify("Cập nhật thành công!", { position: "bottom right", className: "success" });
                },
                error: function (response) {
                    alert(response);
                    //location.reload();
                }
            });
        }
    });


    $('#btn_del').click(function () {
        var selectedItem = tk_grid.dataItem(tk_grid.select());
        if (selectedItem == null) {
            $("#grid").notify("Hãy chọn 1 tin tức để xem...", { position: "bottom right", className: "info" });
        }
        else {
            $.ajax({
                type: "POST",
                url: '../SampleCode/deleteRecord',
                data: JSON.stringify({
                    id: selectedItem.ID
                }),
                dataType: "json",
                contentType: "application/json;charset=utf-8",
                success: function (data) {
                    //alert(data);
                    if (data == "1")
                        tk_grid.dataSource.read();
                    $("#grid").notify("Xóa thành công!", { position: "bottom right", className: "success" });
                },
                error: function (response) {
                    //checkSessionExpire(response, returnPage);
                    alert(response);
                    //location.reload();
                }
            });
        }

    });

    //#endregion

    //#region function
    //clear form
    function clearForm() {
        $('#ten').val('');
        $('#des').val('');
    }
    //#endregion

    //#region old connect with hub
    //var hubURL = link + "/SignalR/hubs";
    ////$.hubConnection()
    ////var testHubProxy = $.connection.myHub1;
    //var connection = $.hubConnection(hubURL, { useDefaultPath: false });
    //var testHubProxy = connection.createHubProxy('ChatHub');
    //var hubStart = connection.start({ transport: 'longPolling', json: true });
    //testHubProxy.on("ReceiveMessage", function (s) {
    //    //defined method (respone to client from server)
    //    //console.log(s);
    //    tk_grid.dataSource.read();
    //    console.log("Grid load OK!");
    //    $("#grid").notify("Cập nhật thành công!", { position: "bottom right", className: "success" });
    //    //$('#testInput2').val(s);
    //});
    //connection.start().done(function () {
    //    //testHubProxy.invoke("ReadAllNew");
    //})

    //const connection = new signalR.HubConnectionBuilder()
    //    .withUrl(link+"/ChatHub")
    //    .configureLogging(signalR.LogLevel.Information)
    //    .build();

    //connection.on("ReceiveMessage", function() {
    //    //const encodedMsg = user + " says " + message;
    //    //const li = document.createElement("li");
    //    //li.textContent = encodedMsg;
    //    //document.getElementById("messagesList").appendChild(li);
    //    //tk_grid.dataSource.read();
    //    console.log("Grid load OK!");
    //    $("#grid").notify("Cập nhật thành công!", { position: "bottom right", className: "success" });
    //});

    ////connection.start().then(function () {
    ////    console.log("connected");
    ////});

    //connection.start().catch(err => console.error(err.toString()));

    //async function start() {
    //    try {
    //        await connection.start();
    //        console.log("connected");
    //    } catch (err) {
    //        console.log(err);
    //        setTimeout(() => start(), 5000);
    //    }
    //};

    //connection.onclose(async () => {
    //    await start();
    //});

    //connection.invoke("SendMessage", user, message).catch(err => console.error(err.toString()));
    //connection.invoke("ReceiveMessage").catch(err => console.log(err.toString()));
    //connection.invoke("SendMessage");
    //#endregion

    //#region sendAll

    //const connection = new signalR.HubConnectionBuilder()
    //    .withUrl(link+"/chatHub")
    //    .configureLogging(signalR.LogLevel.Information)
    //    .build();

    //connection.on("ReceiveMessage", (user, message) => {
    //    const encodedMsg = user + " says: " + message;
    //    const li = document.createElement("li");
    //    li.textContent = encodedMsg;
    //    document.getElementById("messagesList").appendChild(li);
    //});

    //document.getElementById("sendButton").addEventListener("click", event => {
    //    const user = document.getElementById("userInput").value;
    //    const message = document.getElementById("messageInput").value;
    //    connection.invoke("SendMessage", user, message).catch(err => console.log(err.toString()));
    //    event.preventDefault();
    //});

    //#endregion

    //send to users
    const connection = new signalR.HubConnectionBuilder()
        //.withUrl(link + "/chatHub?userid=" + "114") 
        //.withAutomaticReconnect()
        //.withUrl(link + "/chatHub?userid=" + "Local/221@agents/n") 
        //.withUrl(link + "/chatHub?userid=" + "Local/222@agents/n", { transport: signalR.HttpTransportType.WebSockets | signalR.HttpTransportType.LongPolling })
        .withUrl(link + "/chatHub?userid=" + "Local/222@agents/ntestbyLamVT", { transport: signalR.HttpTransportType.WebSockets | signalR.HttpTransportType.LongPolling })
        //.withUrl(link + "/chatHub?userid=" + "Local/220@agents/n") 
        //.withUrl(link + "/chatHub?userid=" + "SIP/221/n")
        .build();
    //localStorage.setItem("supporterid", "Local/221@agents/n")
    //localStorage.setItem("supporterid", "Local/222@agents/n")
    localStorage.setItem("supporterid", "Local/222@agents/ntestbyLamVT")
    //localStorage.setItem("supporterid", "Local/220@agents/n")
    //localStorage.setItem("supporterid", "SIP/221/n")

    //#region receive message from Zalo, Facebook
    connection.on("ReceiveMessageFw", (user, message) => {
        var encodedMsg = '';

        console.log(message);
        encodedMsg = message.username + " says: " + message.message;
        localStorage.setItem("zaloUid", user);
        localStorage.setItem("appid", message.appid);

        const li = document.createElement("li");
        li.textContent = encodedMsg + ' ' + new Date();
        document.getElementById("messagesList").appendChild(li);
    });
    //#endregion

    connection.on("ReceiveMessageBw", (supporterid, message) => {
        var encodedMsg = '';

        //switch (message.)
        encodedMsg = supporterid + " says: " + message.message;

        const li = document.createElement("li");
        li.textContent = encodedMsg + ' ' + new Date();
        document.getElementById("messagesList").appendChild(li);
    });
    //connection.onreconnected((connectionId) => {
    //    console.assert(connection.state === signalR.HubConnectionState.Connected);

    //    document.getElementById("messageInput").disabled = false;

    //    const li = document.createElement("li");
    //    li.textContent = `Connection reestablished. Connected with connectionId "${connectionId}".`;
    //    document.getElementById("messagesList").appendChild(li);
    //});

    $('#getConnectId').click(function () {
        connection.invoke('getConnectionId')
            .then(function (connectionId) {
                // Send the connectionId to controller
                document.getElementById("txt_connectionId").value = connectionId;
            });
    });

    document.getElementById("sendButton").addEventListener("click", event => {
        //const user = document.getElementById("userInput").value;
        //const user2 = document.getElementById("userInput2").value;
        //connectionIdUserId = $('#txt_connectionId').val();
        //connectionIdUserId2 = $('#txt_connectionId2').val();
        const message = document.getElementById("messageInput").value;

        //#region model test
        var textLiveChatobj = {
            appType: "FACEBOOK",
            typeMessage: "",
            appid: localStorage.getItem("appid"),
            uid: localStorage.getItem("zaloUid"),
            supporterid: localStorage.getItem("supporterid"),
            supportername: "Default",
            message: message,
            imageUrl: "",
            imageTitle: "",
            imageDes: "",
            videoUrl: "",
            videoTitle: "",
            videoDes: "",
            videoThumb: "",
            linkUrl: "",
            linkTitle: "",
            linkDes: "",
            linkThumb: "",
            buttons: []
        }

        var textFacebookobj = {
            appType: "FACEBOOK",
            typeMessage: "Text",
            appid: "301082624172553",
            uid: "2827532807284177",
            supporterid: "Local/221@agents/n",
            supportername: "Default",
            message: "hello",
            imageUrl: "",
            imageTitle: "",
            imageDes: "",
            videoUrl: "",
            videoTitle: "",
            videoDes: "",
            videoThumb: "",
            linkUrl: "",
            linkTitle: "",
            linkDes: "",
            linkThumb: "",
            buttons: []
        }

        var textobj = {
            appType: "ZALO",
            typeMessage: "Text",
            appid: localStorage.getItem("appid"),
            //appid: "3837004637823339936",
            uid: localStorage.getItem("zaloUid"),
            //uid:"1668401301593382803",
            //uid: "2827532807284177",
            supporterid: "Local/222@agents/n",
            supportername: "Default",
            message: message,
            imageUrl: "",
            imageTitle: "",
            imageDes: "",
            videoUrl: "",
            videoTitle: "",
            videoDes: "",
            videoThumb: "",
            linkUrl: "",
            linkTitle: "",
            linkDes: "",
            linkThumb: "",
            buttons: []
        }

        var photoobj = {
            appType: "ZALO",
            typeMessage: "ZaloPhoto",
            appid: localStorage.getItem("appid"),
            uid: localStorage.getItem("zaloUid"),
            supporterid: localStorage.getItem("supporterid"),
            supportername: "Default",
            message: "",
            imageUrl: "http://f7.photo.talk.zdn.vn/3514182034986952260/061a20c2402da573fc3c.jpg",
            imageTitle: "VNPT 4.0",
            imageDes: "Test gửi ảnh qua API",
            videoUrl: "",
            videoTitle: "",
            videoDes: "",
            videoThumb: "",
            linkUrl: "",
            linkTitle: "",
            linkDes: "",
            linkThumb: "",
            buttons: []
        }

        var videoobj = {
            appType: "ZaloChat",
            typeMessage: "ZaloVideo",
            appid: localStorage.getItem("appid"),
            uid: localStorage.getItem("zaloUid"),
            supporterid: localStorage.getItem("supporterid"),
            supportername: "Default",
            message: "",
            imageUrl: "",
            imageTitle: "",
            imageDes: "",
            videoUrl: "https://f4-zvc.zdn.vn/de37331a8f72662c3f63/4792746507320521936",
            videoTitle: "VNPT IT 2 - Một chiều mưa",
            videoDes: "Test gửi video qua API",
            videoThumb: "http://f16.photo.talk.zdn.vn/3560010979617812631/23214f1e5aecbfb2e6fd.jpg",
            linkUrl: "",
            linkTitle: "",
            linkDes: "",
            linkThumb: "",
            buttons: []
        }

        var linkobj = {
            appType: "ZaloChat",
            typeMessage: "ZaloLink",
            appid: localStorage.getItem("appid"),
            uid: localStorage.getItem("zaloUid"),
            supporterid: localStorage.getItem("supporterid"),
            supportername: "Default",
            message: "",
            imageUrl: "",
            imageTitle: "",
            imageDes: "",
            videoUrl: "",
            videoTitle: "",
            videoDes: "",
            videoThumb: "",
            linkUrl: "https://vnptit.vn",
            linkTitle: "vnptit.vn",
            linkDes: "Test gửi link qua API",
            linkThumb: "http://f7.photo.talk.zdn.vn/3514182034986952260/061a20c2402da573fc3c.jpg",
            buttons: []
        }

        var buttonsobj = {
            appType: "ZaloChat",
            typeMessage: "ZaloSendButton",
            appid: localStorage.getItem("appid"),
            uid: localStorage.getItem("zaloUid"),
            supporterid: localStorage.getItem("supporterid"),
            supportername: "Default",
            message: message,
            imageUrl: "",
            imageTitle: "",
            imageDes: "",
            videoUrl: "",
            videoTitle: "",
            videoDes: "",
            videoThumb: "",
            linkUrl: "",
            linkTitle: "",
            linkDes: "",
            linkThumb: "",
            buttons: [
                {
                    "title": "Nút số 1",
                    "payload": "#1"
                },
                {
                    "title": "Nút số 2",
                    "payload": "kiểm tra nút bấm"
                },
                {
                    "title": "Nút số 3",
                    "payload": "123456789"
                }
            ]
        }

        //#endregion
        var x = $('#n_request').val();
        //connection.invoke("SendPrivateMessageBackward", localStorage.getItem("supporterid"), message, localStorage.getItem("zaloUid")).catch(err => console.log(err.toString()));
        //connection.invoke("SendPrivateMessageBackward", textFacebookobj).catch(err => console.log(err.toString()));
        //connection.invoke("SendPrivateMessageBackward", textobj).catch(err => console.log(err.toString()));
        for (var i = 0; i < x; i++) {
            sendBw(i);
        }
        event.preventDefault();
    });

    function sendBw(i) {
        setTimeout(function () {
            var textobj = {
                appType: "ZALO",
                typeMessage: "Text",
                appid: localStorage.getItem("appid"),
                //appid: "3837004637823339936",
                uid: localStorage.getItem("zaloUid"),
                //uid:"1668401301593382803",
                //uid: "2827532807284177",
                supporterid: "Local/222@agents/n",
                supportername: "Default",
                message: "Hi " + i,
                imageUrl: "",
                imageTitle: "",
                imageDes: "",
                videoUrl: "",
                videoTitle: "",
                videoDes: "",
                videoThumb: "",
                linkUrl: "",
                linkTitle: "",
                linkDes: "",
                linkThumb: "",
                buttons: []
            }
            connection.invoke("SendPrivateMessageBackward", textobj).catch(err => console.log(err.toString()));
        }, 500);
    }
    $('#finishedChat').click(function () {
        connection.invoke("FinishedChat", localStorage.getItem("zaloUid"), localStorage.getItem("appid"), "ZALO").catch(err => console.log(err.toString()));
    });

    $('#finishedCall').click(function () {
        connection.invoke("FinishedCall", localStorage.getItem("supporterid")).catch(err => console.log(err.toString()));
    });

    //$('#finishedChat').click(function () {
    //    connection.invoke("FinishedChat", "2568260225332317919", "1689397181570615473", "ZALO")
    //        .catch(err => console.log(err.toString()));
    //});

    //#region Send to user new

    //const connection = new signalR.HubConnectionBuilder()
    //    .withUrl(link + "/chatHub")
    //    .configureLogging(signalR.LogLevel.Information)
    //    .build();

    //connection.on("ReceiveMessage", (user,message) => {
    //    var encodedMsg = '';
    //    //if ($('#userInput2').val() == '' || $('#userInput2').val() == null) {
    //    //    encodedMsg = $('#userInput').val() + " says: " + message;
    //    //}
    //    //else {
    //    //    encodedMsg = $('#userInput').val() + " says: " + message;
    //    //    encodedMsg = $('#userInput').val() + " says: " + message;
    //    //}
    //    encodedMsg = user + " says: " + message;

    //    const li = document.createElement("li");
    //    li.textContent = encodedMsg;
    //    document.getElementById("messagesList").appendChild(li);
    //});

    //$('#getUserId').click(function () {
    //    connection.invoke('GetUserId')
    //        .then(function (userId) {
    //            // Send the connectionId to controller
    //            document.getElementById("userInput").value = userId;
    //        });
    //});

    //$('#getConnectId').click(function () {
    //    connection.invoke('getConnectionId')
    //        .then(function (connectionId) {
    //            // Send the connectionId to controller
    //            document.getElementById("txt_connectionId").value = connectionId;
    //        });
    //});

    //document.getElementById("sendButton").addEventListener("click", event => {
    //    const user = document.getElementById("userInput").value;
    //    const user2 = document.getElementById("userInput2").value;
    //    //connectionIdUserId = $('#txt_connectionId').val();
    //    //connectionIdUserId2 = $('#txt_connectionId2').val();
    //    const message = document.getElementById("messageInput").value;

    //    connection.invoke("SendPrivateMessageToUser", user, message, user2).catch(err => console.log(err.toString()));
    //    event.preventDefault();
    //});
    //#endregion

    connection.start().then(function () {
        console.log("connected");
    });

    //Listen to call Hub
    //const connection1 = new signalR.HubConnectionBuilder()
    //    .withUrl(link + "/callHub?userid=" + "002")
    //    .build();
    connection.on("ReceiveCall", (callerid, agent, uid) => {
        //debugger
        var encodedMsg = '';

        console.log(agent);
        console.log(uid);
        encodedMsg = callerid + " is calling....";

        const li = document.createElement("li");
        li.textContent = encodedMsg;
        document.getElementById("messagesList").appendChild(li);
    });

    //connection1.start().then(function () {
    //    console.log("connected1");
    //});

    async function start() {
        try {
            await connection.start();
            console.log("connected");
        } catch (err) {
            console.log(err);
            setTimeout(() => start(), 5000);
            console.log("reconnect");
        }
    };

    connection.onclose(async (x) => {
        if (x != null) {
            await start();
        }
    });

    //#region Notification Hub
    //var officerid = "79247406-9518-4473-8bc1-57da9008b05f";
    ////var officerid = "05c5c8ff-78c0-4b6d-9b8d-9de43a2ba575";
    //var departmentid = "7c5f90c4-887f-4450-abbb-89217b9014fa";
    ////var departmentid = "5866357e-8251-4975-b56d-4dd971c73685";
    ////Listen to notify Hub
    //var connection1 = new signalR.HubConnectionBuilder()
    //    .withUrl(link + "/NotificationHub?officerid=" + officerid + "&departmentid=" + departmentid, { transport: signalR.HttpTransportType.WebSockets | signalR.HttpTransportType.LongPolling })
    //    .build();
    //connection1.on("ReceiveNotifyCrm", () => {
    //    //alert("hub")
    //    var encodedMsg = 'Hub notify';

    //    const li = document.createElement("li");
    //    li.textContent = encodedMsg;
    //    document.getElementById("messagesList").appendChild(li);
    //});

    //connection1.on("TestAlone", () => {
    //    var encodedMsg = 'Alone';

    //    const li = document.createElement("li");
    //    li.textContent = encodedMsg;
    //    document.getElementById("messagesList").appendChild(li);
    //});

    //connection1.on("ReceiveNotify", (processcode, departmentid, officerid, message) => {
    //    var encodedMsg = 'Hub Processing: ' + "processcode: " + processcode + " departmentid: " + departmentid + " officerid: " + officerid + " message: " + message;

    //    const li = document.createElement("li");
    //    li.textContent = encodedMsg;
    //    document.getElementById("messagesList").appendChild(li);
    //});

    //connection1.start().then(function () {
    //    console.log("connected1");
    //});

    ////#region call method log out
    //connection1.on("RequireLogOut", (userid, oldConnectionid) => {
    //    alert("abc");
    //    var encodedMsg = '';
    //    console.log(userid + ": " + oldConnectionid);
    //    encodedMsg = (userid + ": " + oldConnectionid);
    //    const li = document.createElement("li");
    //    li.textContent = encodedMsg;
    //    document.getElementById("messagesList").appendChild(li);
    //    //encodedMsg = "Log out: " + userid;

    //});
    ////#endregion

    //async function Notifystart() {
    //    try {
    //        await connection1.start();
    //        console.log("connected");
    //    } catch (err) {
    //        console.log(err);
    //        setTimeout(() => Notifystart(), 5000);
    //        console.log("reconnect");
    //    }
    //};

    //connection1.onclose(async () => {
    //    await Notifystart();
    //});
    //#endregion
});