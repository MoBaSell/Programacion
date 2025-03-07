package ud7;

public class PersonalServicio extends Empleados{
	private String seccion;
	public PersonalServicio(String nombre, String apellidos, String dni, String estado, int añoIncorp, int numDep, String seccion) {
		super(nombre, apellidos, dni, estado, añoIncorp, numDep);
		this.seccion=seccion;
	}
	
	public String getSeccion() {
		return seccion;
	}
	public void setSeccion(String seccion) {
		this.seccion = seccion;
	}
	
	public String toString() {
		return "PersonalServicio [seccion=" + seccion + "]";
	}

}
