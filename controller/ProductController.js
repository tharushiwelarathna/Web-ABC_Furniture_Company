/**
 *@author Tharushi Welarathna <nirmanitharushi1@gmail.com>
 *@since 10/28/2021
 */
getAllAvailableCategory();
loadStaticCombo();
getAllProducts();

function loadStaticCombo() {
    // Category Type
    $('#cmbCateType').children().remove();
    $('#cmbCateType').append("<option>-Category Type-</option>");
    $($('#cmbCateType').children().get(0)).attr('disabled', 'true');
    $('#cmbCateType').append("<option value='1'>Appliances</option>");
    $('#cmbCateType').append("<option value='2'>BedRoom</option>");
    $('#cmbCateType').append("<option value='3'>Kitchen Appliances</option>");
    // $('#cmbCateType').append("<option value='4'>OFFICE FURNITURE</option>");
    // $('#cmbCateType').append("<option value='5'>PLASTIC PRODUCTS</option>");
    // $('#cmbCateType').append("<option value='6'>LIVING ROOM</option>");



    // product status:
    $('#statusType').children().remove();
    $('#statusType').append("<option>-Select Status-</option>");
    $($('#statusType').children().get(0)).attr('disabled', 'true');
    $('#statusType').append("<option>Available</option>");
    $('#statusType').append("<option>Disable</option>");


}
function loadCategoryCombo(data) {
    $('#cmbCategory').children().remove();
    $('#cmbCategory').append("<option>-Select Category-</option>");
    $($('#cmbCategory').children().get(0)).attr('disabled', 'true');
    let allCategory = data;
    let category;
    for (let i in allCategory) {
        category = allCategory[i].category;
        $('#cmbCategory').append("<option>" + category + "</option>");
    }

}


function getAllAvailableCategory() {
    $.ajax({
        method: "GET",
        url: "http://localhost:8081/Backend_Website_ABC_Company_war_exploded/api/v1/category?status=Available",
        contentType: 'application/json',
        async: true,
        success: function (data) {
            loadCategoryCombo(data);
            loadStaticCombo();
        }
    });
}




$('#cmbCateType').on('change', function () {
    let categoryType = $("#cmbCateType :selected").text();
    $.ajax({
        method: "GET",
        url: "http://localhost:8081/Backend_Website_ABC_Company_war_exploded/api/v1/category?categoryType=" + categoryType + "&status=Available",
        contentType: 'application/json',
        async: true,
        success: function (data) {
            console.log(data)
            loadCategoryCombo(data);
        }
    });
});

$('#cmbCategory').on('change', function () {
    let category = $("#cmbCategory :selected").text();
    $.ajax({
        method: "GET",
        url: "http://localhost:8081/Backend_Website_ABC_Company_war_exploded/api/v1/category?category=" + category + "&status=Available",
        contentType: 'application/json',
        async: true,
        success: function (data) {
            console.log(data)
            for (const dataKey in data) {
                if (data[dataKey].categoryType == "Kitchen Appliances") {
                    $("#cmbCateType").val('3');
                } else if (data[dataKey].categoryType == "BedRoom") {
                    $("#cmbCateType").val('2');
                } else {
                    $("#cmbCateType").val('1');
                }
            }

        }
    });
});

$("#saveProduct").click(function () {
    if ($("#saveProduct").text() === "Save") {
        console.log("abcd")
        uploadPhotos();
    } else if ($("#saveProduct").text() === "Update Information") {
        uploadPhotos();
    }
});

$("#saveProduct").click(function () {
    let productID = $("#productID").val();
    let productName = $("#productName").val();
    let categoryType = $("#cmbCateType :selected").val();
    let category = $("#cmbCategory :selected").val();
    let addedDate = $("#addedDate").val();
    let displayName= $("#productDisplayName").val();
    let size = $("#productSize").val();
    let productPrice= $("#productPrice").val();
    let description = $("#productDescription").val();
    let status = $("#statusType :selected").val();
    // console.log(email)
    $.ajax({
        method: "POST",
        url: "http://localhost:8081/Backend_Website_ABC_Company_war_exploded/api/v1/product",
        contentType: 'application/json',
        async: true,
        data: JSON.stringify({
            productID: productID,
            productName: productName,
            categoryType: categoryType,
            category: category,
            addedDate: addedDate,
            displayName: displayName,
            size: size,
            productPrice: productPrice,
            description: description,
            status: status
        }),
        success: function (data) {
            console.log(data)
            if (data) {
                alert("Product Saved and 5 files uploaded.")
                getAllProducts();
            } else {
                alert("Saving Failed!");
            }

        }

    });
});


// product Update
$("#updateProduct").click(function () {
    let productID = $("#productID").val();
    let productName = $("#productName").val();
    let categoryType = $("#cmbCateType :selected").val();
    let category = $("#cmbCategory :selected").val();
    let addedDate = $("#addedDate").val();
    let displayName= $("#productDisplayName").val();
    let size = $("#productSize").val();
    let productPrice= $("#productPrice").val();
    let description = $("#productDescription").val();
    let status = $("#statusType :selected").val();

    $.ajax({
        method: "PUT",
        url: "http://localhost:8081/Backend_Website_ABC_Company_war_exploded/api/v1/product",
        contentType: 'application/json',
        async: true,
        data: JSON.stringify({
            productID: productID,
            productName: productName,
            categoryType: categoryType,
            category: category,
            addedDate: addedDate,
            displayName: displayName,
            size: size,
            productPrice: productPrice,
            description: description,
            status: status
        }),
        success: function (data) {
            console.log(data)
            if (data) {
                alert("Product Updated!");
                getAllProducts();
            } else {
                alert("Update Failed!");
            }
        }
    });
});

// //Delete Product
$("#delProduct").click(function () {
    let productID = $("#productID").val();
    let option = confirm(`Do you want to Delete Product ID:${productID}`);
    if (option) {
        $.ajax({
            method: "DELETE",
            url: "http://localhost:8081/Backend_Website_ABC_Company_war_exploded/api/v1/product",
            contentType: 'application/json',
            async: true,
            data: JSON.stringify({
                productID: productID ,
            }),
            success: function (data) {
                console.log(data);
                if (data) {
                    alert("Product Deleted!");
                    getAllProducts();
                } else {
                    alert("Delete Failed!");
                }
            }
        });
    }
});

//Get All Product
function getAllProducts() {
    $.ajax({
        method: "GET",
        url: "http://localhost:8081/Backend_Website_ABC_Company_war_exploded/api/v1/product",
        contentType: 'application/json',
        async: true,
        success: function (data) {
            loadAllProductToTable(data);
        }
    });
}
// load Product to Table
function loadAllProductToTable(data) {
    let allProduct = data;
    console.log(allProduct);
    $("#productTbody").empty();
    for (var i in allProduct) {
        let prodID = allProduct[i].productID;
        let prodName = allProduct[i].productName;
        let cateType = allProduct[i].categoryType
        let cate = allProduct[i].category;
        let addDate = allProduct[i].addedDate;
        let disName = allProduct[i].displayName;
        let size = allProduct[i].size;
        let prodPrice = allProduct[i].productPrice;
        let descrip = allProduct[i].description;
        let statu = allProduct[i].status;

        var row = `<tr><td>${prodID}</td><td>${prodName}</td><td>${cateType}</td><td>${cate}</td><td>${addDate}</td><td>${disName}</td><td>${size}</td><td>${prodPrice}</td><td>${descrip}</td><td>${statu}</td></tr>`;
        $('#productTbody').append(row);
    }

    // Table click Event
    $('#productTbody>tr').off('click');
    $('#productTbody>tr').click(function () {
        let productID = $(this).children('td:eq(0)').text();
        let productName = $(this).children('td:eq(1)').text();
        let categoryType = $(this).children('td:eq(2)').text();
        let category= $(this).children('td:eq(3)').text();
        let addedDate = $(this).children('td:eq(4)').text();
        let displayName = $(this).children('td:eq(5)').text();
        let size= $(this).children('td:eq(6)').text();
        let productPrice  = $(this).children('td:eq(7)').text();
        let description = $(this).children('td:eq(8)').text();
        let status= $(this).children('td:eq(9)').text();

        $("#productID").val(productID);
        $("#productName").val(productName);
        $("#cmbCateType:selected").text(categoryType);
        $("#cmbCategory:selected").text(category);
        $("#addedDate").val(addedDate);
        $("#productDisplayName").val(displayName);
        $("#productSize").val(size);
        $("#productPrice").val(productPrice );
        $("#productDescription").val(description);
        $("#statusType :selected").text(status);
    });
}

function uploadPhotos() {
    // console.log("upload")
    var fileObject1 = $("#formFile")[0].files[0];//access file object from input field
    var fileName1 = $('#productID').val() + " - photo";
    var fileObject2 = $("#formFile1")[0].files[0];
    var fileName2 = $('#productID').val() + " - photo2";
    var fileObject3 = $("#formFile2")[0].files[0];
    var fileName3 = $('#productID').val() + " - photo3";
    var fileObject4 = $("#formFile3")[0].files[0];
    var fileName4 = $('#productID').val() + " - photo4";
    var fileObject5 = $("#formFile4")[0].files[0];
    var fileName5 = $('#productID').val() + " - photo5";

    console.log(fileName1);
    console.log(fileName2);
    console.log(fileName3);
    console.log(fileName4);
    console.log(fileName5);


    var data = new FormData();
    data.append("formFile", fileObject1, fileName1);
    data.append("formFile1", fileObject2, fileName2);
    data.append("formFile2", fileObject3, fileName3);
    data.append("formFile3", fileObject4, fileName4);
    data.append("formFile4", fileObject5, fileName5);

    //append data
    $.ajax({
        url: "http://localhost:8081/Backend_Website_ABC_Company_war_exploded/api/v1/product",
        method: 'POST',
        async: true,
        processData: false, //stop processing data of request body
        contentType: false, // stop setting content type by jQuery
        data: data,
        success: function (data) {
            if (data) {
                // console.log("done")
                saveProduct();
            }
        }
    });
}

