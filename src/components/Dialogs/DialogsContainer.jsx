import React from "react";
import { сonnect } from "react-redux";
import Dialogs from "./Dialogs";
// import s from "./Dialogs.module.css";
import {
  sendMessageCreator,
  updateNewMessageBodyCreator,
} from "../../redux/dialogsReducer";

// const DialogsContainer = (props) => {
//   let state = props.store.getState().dialogsPage;

//   // функція додоє нове повідомлення //
//   const onSendMessageClick = () => {
//     props.store.dispatch(sendMessageCreator());
//   };

//   const onSendmessageChange = (body) => {
//     props.store.dispatch(updateNewMessageBodyCreator(body));
//   };

//   return (
//     <div className={s.dialogs}>
//       <Dialogs
//         updateNewMessageBody={onSendmessageChange}
//         sendMessage={onSendMessageClick}
//         dialogsPage={state}
//       />
//     </div>
//   );
// };

let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    updateNewMessageBody: (body) => {
      dispatch(updateNewMessageBodyCreator(body));
    },
    sendMessage: () => {
      dispatch(sendMessageCreator());
    },
  };
};

const DialogsContainer = сonnect(
  mapStateToProps,
  mapDispatchToProps
)(Dialogs);

export default DialogsContainer;
