const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEWMESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";

let initialState = {
  messages: [
    { id: 1, message: "Hello" },
    { id: 2, message: "How are you?" },
    { id: 3, message: "Thanks" },
    { id: 4, message: "Somethink" },
  ],
  newMessageBody: "",
  dialogs: [
    { id: 1, name: "Luke" },
    { id: 2, name: "Brutale" },
    { id: 3, name: "Yura" },
    { id: 4, name: "Lena" },
  ],
};

const dialogsReducer = (state = initialState, action) => {
  //функція додає символи в текстерію на сторінці діалоги____________//
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      return { ...state, newMessageBody: action.body };

    //функція відправляє нове повідомлення на сторінці діалоги____________//
    case SEND_MESSAGE:
      let body = state.newMessageBody;
      return {
        ...state,
        messages: [
          ...state.messages,
          { id: 6, message: body },
        ],
        newMessageBody: "",
      };
    default:
      return state;
  }
};

export const sendMessageCreator = () => ({
  type: SEND_MESSAGE,
});
export const updateNewMessageBodyCreator = (body) => ({
  type: UPDATE_NEW_MESSAGE_BODY,
  body: body,
});

export default dialogsReducer;
