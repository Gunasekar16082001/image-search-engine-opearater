import React from "react";

function Contact() {
  return (
    <div
      className="ui raised very padded text container segment "
      style={{ margin: "30px" }}
    >
      <h1>Contact</h1>
      <form class="ui form">
  <h4 class="ui dividing header"> Information</h4>
  <div class="field">
    <label>Name</label>
    <div class="two fields">
      <div class="field">
        <input type="text" name="shipping[first-name]" placeholder="First Name" />
      </div>
      <div class="field">
        <input type="text" name="shipping[last-name]" placeholder="Last Name" />
      </div>
    </div>
  </div>
  <div class="field">
    <label> Address</label>
    <div class="fields">
      <div class="twelve wide field">
        <input type="text" name="shipping[address]" placeholder="Street Address" />
      </div>
      <div class="four wide field">
        <input type="text" name="shipping[address-2]" placeholder="Apt #" />
      </div>
    </div>
  </div>
  <div class="two fields">
    <div class="field">
      <label>State</label>
      <select class="ui fluid dropdown">
        <option value="">State</option>
    <option value="AL">Alabama</option>
    <option value="AK">Alaska</option>
    <option value="AZ">Arizona</option>
    <option value="AR">Arkansas</option>
    <option value="CA">California</option>
    <option value="CO">Colorado</option>
    <option value="CT">Connecticut</option>
    <option value="DE">Delaware</option>
    <option value="DC">District Of Columbia</option>
    <option value="FL">Florida</option>
    <option value="GA">Georgia</option>
    <option value="HI">Hawaii</option>
    <option value="ID">Idaho</option>
    <option value="IL">Illinois</option>
 
      </select>
    </div>
    <div class="field">
      <label>Country</label>
      <div class="ui fluid search selection dropdown">
        <input type="hidden" name="country" />
        <i class="dropdown icon"></i>
        <div class="default text">Select Country</div>
        <div class="menu">
    <div class="item" data-value="af"><i class="af flag"></i>Afghanistan</div>
    <div class="item" data-value="ax"><i class="ax flag"></i>Aland Islands</div>
    <div class="item" data-value="al"><i class="al flag"></i>Albania</div>

  </div>
       </div>
    </div>
  </div>
 
  <div class="ui button" tabindex="0">Submit </div>
</form>
</div>
  );
}

export default Contact;
