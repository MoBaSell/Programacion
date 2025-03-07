package ud7;

public class Profesor extends Empleados {
	private  String departamento;
	public Profesor(String nombre, String apellidos, String dni, String estado, int añoIncorp, int numDep,String departamento) {
		super(nombre, apellidos, dni, estado, añoIncorp,numDep);
		this.departamento=departamento;
	}
	
	public String getDepartamento() {
		return departamento;
	}
	public void setDepartamento(String departamento) {
		this.departamento = departamento;
	}
	
	public String toString() {
		return "Profesor [departamento=" + departamento + "]";
	}
}
