/**
 *@author Tharushi Welarathna <nirmanitharushi1@gmail.com>
 *@since 10/28/2021
 */

getAllCategory();
loadComboBoxes();

// loading combo box in form
function loadComboBoxes() {
    // Category Type
    $('#cmbCategoryType').children().remove();
    $('#cmbCategoryType').append("<option>-Category Type-</option>");
    $($('#cmbCategoryType').children().get(0)).attr('disabled', 'true');
    $('#cmbCategoryType').append("<option>Appliances</option>");
    $('#cmbCategoryType').append("<option>BedRoom</option>");
    $('#cmbCategoryType').append("<option>Kitchen Appliances</option>");
    // $('#cmbCategoryType').append("<option>OFFICE FURNITURE</option>");
    // $('#cmbCategoryType').append("<option>PLASTIC PRODUCTS</option>");
    // $('#cmbCategoryType').append("<option>LIVING ROOM</option>");

    // Category status
    $('#CategoryStatus').children().remove();
    $('#CategoryStatus').append("<option>-Category Status-</option>");
    $($('#CategoryStatus').children().get(0)).attr('disabled', 'true');
    $('#CategoryStatus').append("<option>Available</option>");
    $('#CategoryStatus').append("<option>Disable</option>");

}

// Category Add
$("#saveCategory").click(function () {
    let categoryID = $("#categoryID").val();
    let categoryType = $("#cmbCategoryType :selected").val();
    let categoryName = $("#categoryName").val();
    let description = $("#description").val();
    let displayName = $("#displayName").val();
    let brand = $("#availableBrand").val();
    let available = $("#CategoryStatus:selected").val();

    $.ajax({
        method: "POST",
        url: "http://localhost:8081/Backend_Website_ABC_Company_war_exploded/api/v1/category",
        contentType: 'application/json',
        async: true,
        data: JSON.stringify({
            categoryID: categoryID,
            categoryType:categoryType,
            category: categoryName,
            description: description,
            displayName: displayName,
            availableBrands: brand,
            status: available

        }),
        success: function (data) {
            console.log(data)
            if (data) {
                alert("Category Saved!");
                getAllCategory();
            } else {
                alert("Saving Failed!");
            }
        }
    });
});


// Category Update
$("#updateCategory").click(function () {
    let categoryID = $("#categoryID").val();
    let categoryType = $("#cmbCategoryType :selected").val();
    let categoryName = $("#categoryName").val();
    let description = $("#description").val();
    let displayName = $("#displayName").val();
    let brand = $("#availableBrand").val();
    let available = $("#CategoryStatus:selected").val();

    $.ajax({
        method: "PUT",
        url: "http://localhost:8081/Backend_Website_ABC_Company_war_exploded/api/v1/category",
        contentType: 'application/json',
        async: true,
        data: JSON.stringify({
            categoryID: categoryID,
            categoryType:categoryType,
            category: categoryName,
            description: description,
            displayName: displayName,
            availableBrands: brand,
            status: available
        }),
        success: function (data) {
            console.log(data)
            if (data) {
                alert("Category Updated!");
                getAllCars();
            } else {
                alert("Update Failed!");
            }
        }
    });
});

//Delete Category
$("#delCategory").click(function () {
    let categoryID = $("#categoryID").val();
    let option = confirm(`Do you want to Delete Category ID:${categoryID}`);
    if (option) {
        $.ajax({
            method: "DELETE",
            url: "http://localhost:8081/Backend_Website_ABC_Company_war_exploded/api/v1/category",
            contentType: 'application/json',
            async: true,
            data: JSON.stringify({
                categoryID: categoryID,
            }),
            success: function (data) {
                console.log(data);
                if (data) {
                    alert("Category Deleted!");
                    getAllCategory();
                } else {
                    alert("Delete Failed!");
                }
            }
        });
    }
});

//Get All Category
function getAllCategory() {
    $.ajax({
        method: "GET",
        url: "http://localhost:8081/Backend_Website_ABC_Company_war_exploded/api/v1/category",
        contentType: 'application/json',
        async: true,
        success: function (data) {
            loadAllCategoryToTable(data);
        }
    });
}
// load Category to Table
function loadAllCategoryToTable(data) {
    let allCategory = data;
    console.log(allCategory);
    $("#categoryTbody").empty();
    for (var i in allCategory) {
        let categoryID = allCategory[i].categoryID;
        let categoryType = allCategory[i].categoryType;
        let categoryName = allCategory[i].category;
        let description = allCategory[i].description;
        let displayName = allCategory[i].displayName;
        let brand = allCategory[i].availableBrands;
        let status = allCategory[i].status;


        var row = `<tr><td>${categoryID}</td><td>${categoryType}</td><td>${categoryName}</td><td>${description}</td><td>${displayName}</td><td>${brand}</td><td>${status}</td></tr>`;
        $('#categoryTbody').append(row);
    }

    // Table click Event
    $('#categoryTbody>tr').off('click');
    $('#categoryTbody>tr').click(function () {
        let categoryID = $(this).children('td:eq(0)').text();
        let categoryType = $(this).children('td:eq(1)').text();
        let categoryName = $(this).children('td:eq(2)').text();
        let description= $(this).children('td:eq(3)').text();
        let displayName = $(this).children('td:eq(4)').text();
        let availableBrands = $(this).children('td:eq(5)').text();
        let status= $(this).children('td:eq(6)').text();

        $("#categoryID").val(categoryID);
        $("#cmbCategoryType:selected").text(categoryType);
        $("#categoryName").val(categoryName);
        $("#description").val(description);
        $("#displayName").val(displayName);
        $("#availableBrand").val(availableBrands);
        $("#CategoryStatus :selected").text(status);
    });
}



