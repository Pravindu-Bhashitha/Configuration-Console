import React from "react";
import { Route } from "react-router-dom";
import ToggleSwitch from "./ToggleSwitch";
const Access = () => {
    <Route path="access"></Route>
    return ( 
        <div style={{color:"black",marginLeft:"1%"}}>
            <h1>Manage User Access</h1>
            <table style={{marginLeft:"1%",fontSize:"20px",marginTop:"7%"}}>
                <tr style={{border:"1px solid black"}}>
                    <th style={{border:"1px solid black",backgroundColor:"grey",textAlign:'center',width:"22%"}}>Task</th>
                    <th style={{border:"1px solid black",backgroundColor:"grey",textAlign:'center',width:"16%"}}>Read Only</th>
                    <th style={{border:"1px solid black",backgroundColor:"grey",textAlign:'center',width:"16%"}}>Editable</th>
                    <th style={{border:"1px solid black",backgroundColor:"grey",textAlign:'center',width:"16%"}}>Delete</th>
                    <th style={{border:"1px solid black",backgroundColor:"grey",textAlign:'center',width:"16%"}}>Disable/Enable User</th>
                    <th style={{border:"1px solid black",backgroundColor:"grey",textAlign:'center',width:"16%"}}>Download OR Upload</th>
                </tr>
                <tr>
                    <td style={{border:"1px solid black"}}>Client Details</td>
                    <td style={{border:"1px solid black"}}><ToggleSwitch/></td>
                    <td style={{border:"1px solid black"}}><ToggleSwitch/></td>
                    <td style={{border:"1px solid black"}}><ToggleSwitch/></td>
                    <td style={{border:"1px solid black"}}><ToggleSwitch/></td>
                    <td style={{border:"1px solid black"}}><ToggleSwitch/></td>
                </tr>
                <tr>
                    <td style={{border:"1px solid black"}}>Error Log File</td>
                    <td style={{border:"1px solid black"}}><ToggleSwitch/></td>
                    <td style={{border:"1px solid black"}}><ToggleSwitch/></td>
                    <td style={{border:"1px solid black"}}><ToggleSwitch/></td>
                    <td style={{border:"1px solid black"}}><ToggleSwitch/></td>
                    <td style={{border:"1px solid black"}}><ToggleSwitch/></td>
                </tr>
                <tr>
                    <td style={{border:"1px solid black"}}>Services - Start</td>
                    <td style={{border:"1px solid black"}}><ToggleSwitch/></td>
                    <td style={{border:"1px solid black"}}><ToggleSwitch/></td>
                    <td style={{border:"1px solid black"}}><ToggleSwitch/></td>
                    <td style={{border:"1px solid black"}}><ToggleSwitch/></td>
                    <td style={{border:"1px solid black"}}><ToggleSwitch/></td>
                </tr>
                <tr>
                    <td style={{border:"1px solid black"}}>Services - Stop</td>
                    <td style={{border:"1px solid black"}}><ToggleSwitch/></td>
                    <td style={{border:"1px solid black"}}><ToggleSwitch/></td>
                    <td style={{border:"1px solid black"}}><ToggleSwitch/></td>
                    <td style={{border:"1px solid black"}}><ToggleSwitch/></td>
                    <td style={{border:"1px solid black"}}><ToggleSwitch/></td>
                </tr>
                <tr>
                    <td style={{border:"1px solid black"}}>Services - Pause</td>
                    <td style={{border:"1px solid black"}}><ToggleSwitch/></td>
                    <td style={{border:"1px solid black"}}><ToggleSwitch/></td>
                    <td style={{border:"1px solid black"}}><ToggleSwitch/></td>
                    <td style={{border:"1px solid black"}}><ToggleSwitch/></td>
                    <td style={{border:"1px solid black"}}><ToggleSwitch/></td>
                </tr>
                <tr>
                    <td style={{border:"1px solid black"}}>Services - Resume</td>
                    <td style={{border:"1px solid black"}}><ToggleSwitch/></td>
                    <td style={{border:"1px solid black"}}><ToggleSwitch/></td>
                    <td style={{border:"1px solid black"}}><ToggleSwitch/></td>
                    <td style={{border:"1px solid black"}}><ToggleSwitch/></td>
                    <td style={{border:"1px solid black"}}><ToggleSwitch/></td>
                </tr>
                <tr>
                    <td style={{border:"1px solid black"}}>Services - Restart</td>
                    <td style={{border:"1px solid black"}}><ToggleSwitch/></td>
                    <td style={{border:"1px solid black"}}><ToggleSwitch/></td>
                    <td style={{border:"1px solid black"}}><ToggleSwitch/></td>
                    <td style={{border:"1px solid black"}}><ToggleSwitch/></td>
                    <td style={{border:"1px solid black"}}><ToggleSwitch/></td>
                </tr>
                <tr>
                    <td style={{border:"1px solid black"}}>Report Hosting</td>
                    <td style={{border:"1px solid black"}}><ToggleSwitch/></td>
                    <td style={{border:"1px solid black"}}><ToggleSwitch/></td>
                    <td style={{border:"1px solid black"}}><ToggleSwitch/></td>
                    <td style={{border:"1px solid black"}}><ToggleSwitch/></td>
                    <td style={{border:"1px solid black"}}><ToggleSwitch/></td>
                </tr>
                <tr>
                    <td style={{border:"1px solid black"}}>Alert</td>
                    <td style={{border:"1px solid black"}}><ToggleSwitch/></td>
                    <td style={{border:"1px solid black"}}><ToggleSwitch/></td>
                    <td style={{border:"1px solid black"}}><ToggleSwitch/></td>
                    <td style={{border:"1px solid black"}}><ToggleSwitch/></td>
                    <td style={{border:"1px solid black"}}><ToggleSwitch/></td>
                </tr>
                <tr>
                    <tr><button style={{width:"230%",backgroundColor:"#1ab394",color:"#fff",borderRadius:"2px",border:"solid transparent",marginTop:"25%",marginLeft:"8%",fontWeight:"600"}}>Save</button></tr>
                </tr>
            </table>
        </div>
    );
}
 
export default Access;