
function createCustomElement(ele_name, attr_name, attr_value, content) {
    var ele = document.createElement(ele_name);
    ele.setAttribute(attr_name, attr_value);
    ele.innerHTML = content;
    return ele;
}


function createForm() {

    var form = document.createElement('form');

    var Label1 = createCustomElement('label', 'for', 'firstname', 'First Name');
    var br = document.createElement("br");
    var Input1 = createCustomElement('input', 'type', 'text', '');
    form.append(Label1);
    form.append(br);
    form.append(Input1);

    var br = document.createElement("br");
    form.append(br);

    var Label2 = createCustomElement('label', 'for', 'middlename', 'Middle Name');
    var br = document.createElement("br");
    var Input2 = createCustomElement('input', 'type', 'text', '');
    form.append(Label2);
    form.append(br);
    form.append(Input2);

    var br = document.createElement("br");
    form.append(br);

    var Label3 = createCustomElement('label', 'for', 'lastname', 'Last Name');
    var br = document.createElement("br");
    var Input3 = createCustomElement('input', 'type', 'text', '');
    form.append(Label3);
    form.append(br);
    form.append(Input3);

    var br = document.createElement("br");
    form.append(br);

    var Label4 = createCustomElement('label', 'for', 'email', 'Email');
    var br = document.createElement("br");
    var Input4 = createCustomElement('input', 'type', 'email', '');
    form.append(Label4);
    form.append(br);
    form.append(Input4);

    var br = document.createElement("br");
    form.append(br);

    var Label5 = createCustomElement('label', 'for', 'password', 'Password');
    var br = document.createElement("br");
    var Input5 = createCustomElement('input', 'type', 'password', '');
    form.append(Label5);
    form.append(br);
    form.append(Input5);

    var br = document.createElement("br");
    form.append(br);

    var Label6 = createCustomElement('label', 'for', 'phonenumber', 'Phone Number');
    var br = document.createElement("br");
    var Input6 = createCustomElement('input', 'type', 'tel', '');
    form.append(Label6);
    form.append(br);
    form.append(Input6);

    return form;
}

document.body.append(createForm());
