import Login from '../components/Sections/Login/Login';
import RegisterForm from '../components/Sections/Login/RegisterForm';
import Layout from './../components/Layout/Layout';
export default function RegisterPage() {
  return (
    <Layout>
      <section className="container">
        <RegisterForm />
      </section>
    </Layout>
  );
}
