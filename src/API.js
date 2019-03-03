class API {
  static async login(user) {
    const response = await fetch("http://localhost:3000/api/v1/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user)
    });
    const data = await response.json();
    return data;
  }

  static async register(user) {
    const response = await fetch("http://localhost:3000/api/v1/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user)
    });
    const data = await response.json();
    return data;
  }

  static createProfile(profile) {
    fetch("http://localhost:3000/api/v1/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(profile)
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
      });
  }

  static sendMessage(message) {
    fetch("http://localhost:3000/api/v1/messages", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(message)
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
      });
  }

  static createHairCard(haircard) {
    fetch("http://localhost:3000/api/v1/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(haircard)
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
      });
  }

  static async scheduleAppointment(appointment) {
    const response = await fetch("http://localhost:3000/api/v1/appointments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(appointment)
    });
    const data = await response.json();
    console.log(data);
    return data;
  }

  // updates / edits
  static updateAppointment(appointment) {
    fetch(`http://localhost:3000/api/v1/appointments/${appointment.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(appointment)
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
      });
  }

  static updateProfile(profile) {
    fetch(`http://localhost:3000/api/v1/users/${profile.user_id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(profile)
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
      });
  }

  static updateHaircard(haircard) {
    fetch(`http://localhost:3000/api/v1/appointments/${haircard.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(haircard)
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
      });
  }

  // delete
  static deleteAppointment(appointment) {
    fetch(`http://localhost:3000/api/v1/appointments/${appointment.id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(appointment)
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
      });
  }

  static deleteProfile(profile) {
    fetch(`http://localhost:3000/api/v1/users/${profile.user_id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(profile)
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
      });
  }

  static deleteHaircard(haircard) {
    fetch(`http://localhost:3000/api/v1/appointments/${haircard.id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(haircard)
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
      });
  }
}

export default API;
