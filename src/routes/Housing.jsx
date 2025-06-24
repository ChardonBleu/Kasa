import { useParams, useNavigate } from 'react-router';
import { useEffect } from 'react';

export default function Housing() {
  const { housingId } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
      // housingId doit être un nombre
      if (!/^\d+$/.test(housingId)) {
        navigate('404'); // Redirige vers la page 404
      }
    }, [housingId, navigate]);


  return (
    <>
        <div>
            <p>Détail du logement { housingId }</p>
        </div>

    </>
  );
}