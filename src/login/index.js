class User {
  constructor(name, isLogged) {
    this.name = name;
    this.state = { auth: [isLogged] };
  }

  setAuth(value) {
    for (const key in value) {
      if (this.state.hasOwnProperty) {
        this.state[key] = value[key];
      }
    }
  }

  getUserAuth() {
    return this.state.auth[0];
  }
}

export const user = new User("root", false);

// let state = {}

// export const getState = () => state

// export const setState = (nextState) => {
// state = nextState
// }
