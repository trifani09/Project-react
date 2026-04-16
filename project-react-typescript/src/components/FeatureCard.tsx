type Props = {
  title: string;
  desc: string;
};

export default function FeatureCard({ title, desc }: Props) {
  return (
    <div className="bg-white shadow-xl rounded-xl p-6 w-[320px] text-center hover:shadow-2xl transition">
      <h3 className="text-blue-600 font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{desc}</p>
    </div>
  );
}
