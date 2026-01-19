import PaymentMethods from "./PaymentMethods";

const PaymentPage = () => {
  return (
    <div className="min-h-screen bg-white text-white flex">
      <main className="flex-1 p-8">
        <PaymentMethods />
      </main>
    </div>
  );
};

export default PaymentPage;
