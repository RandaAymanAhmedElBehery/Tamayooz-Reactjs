import React, { Component } from 'react';
import './../css/buttons.css';
class UserButtons extends Component {
  render() {
    let buttonsList
    if(this.props.buttons)
    {
      buttonsList=this.props.buttons.map(button => {
        return (
          <div className="divStyle">
          <table>
                 <tr>
                     <td>
                         <a href="AddUser.js" ClassName={button.className}> {button.title} &nbsp;&nbsp;&nbsp;</a>
                     </td>
                     <td>
                         <a href="UpdateUser.js" ClassName={button.className}> {button.title} &nbsp;&nbsp;&nbsp;</a>
                    </td>
                     <td>
                         <a href="DeleteUser.js" ClassName={button.className}> {button.title} &nbsp;&nbsp;&nbsp;</a>
                     </td>
                 </tr>
             </table>
          </div>

        );

      });
    }
    return (
      <div>
      {buttonsList}
      </div>
    );
  }
}

export default UserButtons;
