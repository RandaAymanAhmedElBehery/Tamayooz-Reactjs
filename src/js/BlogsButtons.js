import React, { Component } from 'react';
import './buttons.css';
class BlogsButtons extends Component {
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
                         <a href="AddBlog.js" ClassName={button.className}> {button.title} &nbsp;&nbsp;&nbsp;</a>
                     </td>
                     <td>
                         <a href="UpdateBlog.js" ClassName={button.className}> {button.title} &nbsp;&nbsp;&nbsp;</a>
                    </td>
                     <td>
                         <a href="DeleteBlog.js" ClassName={button.className}> {button.title} &nbsp;&nbsp;&nbsp;</a>
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

export default BlogsButtons;
