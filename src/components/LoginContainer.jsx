import { Button } from "@mui/material";
import { Link } from "react-router-dom/dist";

export default function LoginContainer() {
  return (
    <div className='container'>
      <form>
        <h3>Personal Details</h3>
        <h4>Fill form to apply a loans</h4>

        <div className="form-half">
          <label for="firm-name">Firm Name
            <input id="firm-name" type="text" value="" name="name" />
          </label>

          <label for="promoter-name">Promoter's Name
            <input id="promoter-name" type="text" value="" name="name" />
          </label>
          <label for="business-type">Business Type
            <input id="business-type" type="text" value="" name="name" />
          </label>

          <label for="website">Website
            <input id="website" type="text" value="" name="name" />
          </label>
        </div>

        <label for="address">Address
          <input className='full-input' id='address' type="text" />
        </label>

        <div className="form-half">
          <label for="contact-number">Contact Number
            <input id="contact-number" type="text" value="" name="name" />
          </label>

          <label for="email">Email Address
            <input id="email" type="text" value="" name="name" />
          </label>
          <label for="loan-amount-requested">Loan Amount Requested
            <input id="loan-amount-requested" type="text" value="" name="name" />
          </label>

          <label for="loan-tenure">Loan Tenure
            <input id="loan-tenure" type="text" value="" name="name" />
          </label>
        </div>

        <label for="loan-purpose">Loan Purpose
          <input className='full-input' id='loan-purpose' type="text" />
        </label>

        <div className="form-half">
          <label for="collateral-offered">Collateral Offered
            <input id="collateral-offered" type="text" value="" name="name" />
          </label>

          <label for="collateral-amount">Collateral Amount
            <input id="collateral-amount" type="text" value="" name="name" />
          </label>
        </div>

        <Link to='/upload'>
          <Button variant="contained" color="success">
            Success
          </Button>
        </Link>
      </form>
      
    </div>
  );
}