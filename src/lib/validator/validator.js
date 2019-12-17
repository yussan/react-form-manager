/**
 * @desc function validate based on state
 * @param {function} setState function to set state from React component
 * @param {object} state state of React component
 * @param {array} requiredInputs list name , sample : ["title", "description", "name"]
 * @param {function} callback after get status of validation , default argument isValid {boolean}
 */
export function stateValidatorChecker({
  setState = () => {},
  state = {},
  requiredInputs = [],
  callback = () => {}
}) {
  let nextState = {};
  let isValid = true;

  const stateKeys = Object.keys(state);

  stateKeys.map(n => {
    // found not valid input
    if (n.includes("_validate") && !state[n].is_valid) {
      isValid = false;
    }
  });

  // check based on required inputs inputs
  requiredInputs.map(n => {
    if (!state[n]) {
      isValid = false;
      nextState[`${n}_validate`] = {
        is_valid: false,
        message: "input wajib diisi"
      };
    }
  });

  if (!isValid) {
    Toast({
      heading: "Form Belum Valid",
      text:
        "Anda tidak bisa melanjutkan aksi ini. Silahkan cek sekali lagi input kamu.",
      icon: "error"
    });
  }

  setState(nextState);

  if (callback) {
    return callback(isValid);
  } else {
    return isValid;
  }
}
