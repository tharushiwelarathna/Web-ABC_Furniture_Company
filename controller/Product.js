
/**
 *@author Tharushi Welarathna <nirmanitharushi1@gmail.com>
 *@since 10/30/2021
 */
getAllProducts();
loadStaticCombo1();
getAllAvailableCategory1();

function loadStaticCombo1() {


    // Category Type
    $('#cmbCateType1').children().remove();
    $('#cmbCateType1').append("<option>-Category Type-</option>");
    $($('#cmbCateType1').children().get(0)).attr('disabled', 'true');
    $('#cmbCateType1').append("<option value='1'>Appliances</option>");
    $('#cmbCateType1').append("<option value='2'>BedRoom</option>");
    $('#cmbCateType1').append("<option value='3'>Kitchen Appliances</option>");



    // product status:
    $('#statusType1').children().remove();
    $('#statusType1').append("<option>-Select Status-</option>");
    $($('#statusType1').children().get(0)).attr('disabled', 'true');
    $('#statusType1').append("<option>Available</option>");
    $('#statusType1').append("<option>Disable</option>");

}


function loadCategoryCombo1(data) {
    $('#cmbCategory1').children().remove();
    $('#cmbCategory1').append("<option>-Select Category-</option>");
    $($('#cmbCategory1').children().get(0)).attr('disabled', 'true');
    let allCategory = data;
    let category;
    for (let i in allCategory) {
        category = allCategory[i].category;
        $('#cmbCategory1').append("<option>" + category + "</option>");
    }

}



function getAllAvailableCategory1() {
    $.ajax({
        method: "GET",
        url: "http://localhost:8081/Backend_Website_ABC_Company_war_exploded/api/v1/category?status=Available",
        contentType: 'application/json',
        async: true,
        success: function (data) {
            loadCategoryCombo1(data);
            loadStaticCombo1();
        }
    });
}

$('#cmbCateType1').on('change', function () {
    let categoryType = $("#cmbCateType :selected").text();
    $.ajax({
        method: "GET",
        url: "http://localhost:8081/Backend_Website_ABC_Company_war_exploded/api/v1/category?categoryType=" + categoryType + "&status=Available",
        contentType: 'application/json',
        async: true,
        success: function (data) {
            console.log(data)
            loadCategoryCombo1(data);
        }
    });
});

$('#cmbCategory').on('change', function () {
    let category = $("#cmbCategory1 :selected").text();
    $.ajax({
        method: "GET",
        url: "http://localhost:8081/Backend_Website_ABC_Company_war_exploded/api/v1/category?category=" + category + "&status=Available",
        contentType: 'application/json',
        async: true,
        success: function (data) {
            console.log(data)
            for (const dataKey in data) {
                if (data[dataKey].categoryType1 == "Kitchen Appliances") {
                    $("#cmbCateType1").val('3');
                } else if (data[dataKey].categoryType1 == "BedRoom") {
                    $("#cmbCateType1").val('2');
                } else {
                    $("#cmbCateType1").val('1');
                }
            }

        }
    });
});


// Product Add
$("#saveProduct1").click(function () {
    let productID = $("#productID1").val();
    let productName = $("#productName1").val();
    let categoryType = $("#cmbCateType1 :selected").val();
    let category = $("#cmbCategory1 :selected").val();
    let addedDate = $("#addedDate1").val();
    let displayName= $("#productDisplayName1").val();
    let size = $("#productSize1").val();
    let productPrice= $("#productPrice1").val();
    let description = $("#productDescription1").val();
    let status = $("#statusType1 :selected").val();

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
                alert("Product Saved!");
                getAllProduct();
            } else {
                alert("Saving Failed!");
            }
        }
    });
});

// Product Update
$("#updateProduct1").click(function () {
    let productID = $("#productID1").val();
    let productName = $("#productName1").val();
    let categoryType = $("#cmbCateType1 :selected").val();
    let category = $("#cmbCategory1 :selected").val();
    let addedDate = $("#addedDate1").val();
    let displayName= $("#productDisplayName1").val();
    let size = $("#productSize1").val();
    let productPrice= $("#productPrice1").val();
    let description = $("#productDescription1").val();
    let status = $("#statusType1 :selected").val();
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
                getAllProduct();
            } else {
                alert("Update Failed!");
            }
        }
    });
});

//Delete Product
$("#delProduct1").click(function () {
    let productID = $("#productID1 ").val();
    let option = confirm(`Do you want to Delete Product ID:${productID }`);
    if (option) {
        $.ajax({
            method: "DELETE",
            url: "http://localhost:8081/Backend_Website_ABC_Company_war_exploded/api/v1/product",
            contentType: 'application/json',
            async: true,
            data: JSON.stringify({
                productID: productID,
            }),
            success: function (data) {
                console.log(data);
                if (data) {
                    alert("Product Deleted!");
                    getAllProduct();
                } else {
                    alert("Delete Failed!");
                }
            }
        });
    }
});

//Get All Product
function getAllProduct() {
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
// load Category to Table
function loadAllProductToTable(data) {
    let allProduct = data;
    console.log(allProduct);
    $("#productTbody1").empty();
    for (var i in allProduct) {
        let productID1 = allProduct[i].productID;
        let productName1 = allProduct[i].productName;
        let categoryType1 = allProduct[i].categoryType
        let category1 = allProduct[i].category;
        let addedDate1 = allProduct[i].addedDate;
        let displayName1 = allProduct[i].displayName;
        let size1 = allProduct[i].size;
        let productPrice1 = allProduct[i].productPrice;
        let description1 = allProduct[i].description;
        let status1 = allProduct[i].status;

        var row = `<tr><td>${productID1}</td><td>${productName1}</td><td>${categoryType1}</td><td>${category1}</td><td>${addedDate1}</td><td>${displayName1}</td><td>${size1}</td><td>${productPrice1}</td><td>${description1}</td><td>${status1}</td></tr>`;
        $('#productTbody1').append(row);
    }

    // Table click Event
    $('#productTbody1>tr').off('click');
    $('#productTbody1>tr').click(function () {
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

        $("#productID1").val(productID);
        $("#productName1").val(productName);
        $("#cmbCateType1:selected").text(categoryType);
        $("#cmbCategory1:selected").text(category);
        $("#addedDate1").val(addedDate);
        $("#productDisplayName1").val(displayName);
        $("#productSize1").val(size);
        $("#productPrice1").val(productPrice );
        $("#productDescription1").val(description);
        $("#statusType1 :selected").text(status);
    });
}
