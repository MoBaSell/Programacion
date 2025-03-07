package ud7;

public class Estudiante extends Persona {
	private String curso;
	public Estudiante(String nombre, String apellidos, String dni, String estado, String curso) {
		super(nombre, apellidos, dni, estado);
		this.curso=curso;
	}
	
	public String getCurso() {
		return curso;
	}
	public void setCurso(String curso) {
		this.curso = curso;
	}
	
	public String toString() {
		return "Estudiante [curso=" + curso + "]";
	}
	
}
