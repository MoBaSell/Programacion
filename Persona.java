package ud7;

public class Persona {
	private String nombre, apellidos,dni, estado;
	public Persona (String nombre,String apellidos,String dni,String estado) {
		this.nombre=nombre;
		this.apellidos=apellidos;
		this.dni=dni;
		this.estado=estado;
	}
	
	public String getNombre() {
		return nombre;
	}
	public String getApellidos() {
		return apellidos;
	}
	public String getDni() {
		return dni;
	}
	public String getEstado() {
		return estado;
	}
	
	public void setNombre(String nombre) {
		this.nombre = nombre;
	}
	public void setApellidos(String apellidos) {
		this.apellidos = apellidos;
	}
	public void setDni(String dni) {
		this.dni = dni;
	}
	public void setEstado(String estado) {
		this.estado = estado;
	}

	public String toString() {
		return "Persona [nombre=" + nombre + ", apellidos=" + apellidos + ", dni=" + dni + ", estado=" + estado + "]";
	}
	

}
