package ud7;

public class Empleados extends Persona {
	private int añoIncorp, numDep;
	public Empleados(String nombre, String apellidos, String dni, 
			String estado, int añoIncorp, int numDep) {
		super(nombre, apellidos, dni, estado);
		this.añoIncorp=añoIncorp;
		this.numDep=numDep;
	}
	
	public int getAñoIncorp() {
		return añoIncorp;
	}
	public void setAñoIncorp(int añoIncorp) {
		this.añoIncorp = añoIncorp;
	}
	public int getNumDep() {
		return numDep;
	}
	public void setNumDep(int numDep) {
		this.numDep = nump;
	}

	public String toString() {
		return "Empleados [añoIncorp=" + añoIncorp + ", numDep=" + numDep + "]";
	}
	
	
}
