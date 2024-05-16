import { admindomain } from "../config/global/domains";
import { Usuario } from "../models/Usuario";

export class LoginService {
  static async login(username: string, password: string): Promise<Usuario> {
    try {
      const response = await fetch(`${admindomain}/api-token-auth/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });
      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("username", username);
        window.location.href = "/";
      } else {
        throw data.non_field_errors[0];
      }

      return data.usuarios as Usuario;
    } catch (error) {
      throw error;
    }
  }
}
