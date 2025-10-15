
import { MunicipalityForm } from "../_components/MunicipalityForm";

export default function EditPage(){
  

  return (
    <div className="max-w-4xl mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Novo Município</h1>
      <MunicipalityForm municipio={null} />
    </div>
  );
}
