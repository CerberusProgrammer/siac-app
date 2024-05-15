import { admindomain } from "../config/global/domain";
import { Usuario } from "../models/Usuario";

export class UsuariosService {
  static async getUsuarios(): Promise<Usuario[]> {
    const requestOptions: RequestInit = {
      method: "GET",
      redirect: "follow",
    };

    try {
      const response = await fetch(`${admindomain}/usuarios`, requestOptions);

      const data = await response.json();
      return data.usuarios as Usuario[];
    } catch (error) {
      console.error("Error fetching usuarios:", error);
      throw error;
    }
  }
}
