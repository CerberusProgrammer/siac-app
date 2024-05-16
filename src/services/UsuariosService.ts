import { admindomain } from "../config/global/domains";
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

  static async getUsuarioById(userId: number): Promise<Usuario> {
    const requestOptions: RequestInit = {
      method: "GET",
      redirect: "follow",
    };

    try {
      const response = await fetch(
        `${admindomain}/usuarios/${userId}`,
        requestOptions
      );
      const data = await response.json();

      return data as Usuario;
    } catch (error) {
      console.error("Error fetching usuarios:", error);
      throw error;
    }
  }
}
