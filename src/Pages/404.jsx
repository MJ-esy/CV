import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AutoNavigate() {
  const navigate = useNavigate(); 

  useEffect(() => {
    navigate("/", { replace: true });
  }, [navigate]);

  return <h1>Redirecting...</h1>;
}
