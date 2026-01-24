const Description = () => {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-xl font-semibold text-neutral-900">
          Product Overview
        </h2>
        <p className="mt-2 text-neutral-600 leading-relaxed">
          Walton WSI-18 Inverter AC is designed specifically for tropical
          climates like Bangladesh. It delivers fast cooling, stable performance
          during voltage fluctuation, and long-term energy savings through
          advanced inverter technology.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-semibold text-neutral-900">
          Key Specifications
        </h2>

        <div className="mt-4 overflow-hidden rounded-xl border bg-white">
  <table className="w-full border-collapse text-sm">
    <tbody>
      <tr className="border-b">
        <td className="w-1/3 px-4 py-3 font-semibold text-neutral-700 border-r">
          Cooling Capacity
        </td>
        <td className="px-4 py-3 text-neutral-600">
          1.5 Ton (18000 BTU) suitable for medium to large rooms
        </td>
      </tr>

      <tr className="border-b">
        <td className="px-4 py-3 font-semibold text-neutral-700 border-r">
          Compressor Type
        </td>
        <td className="px-4 py-3 text-neutral-600">
          High-efficiency inverter compressor for reduced power consumption
        </td>
      </tr>

      <tr className="border-b">
        <td className="px-4 py-3 font-semibold text-neutral-700 border-r">
          Voltage Range
        </td>
        <td className="px-4 py-3 text-neutral-600">
          Operates reliably between 140V – 260V without stabilizer
        </td>
      </tr>

      <tr className="border-b">
        <td className="px-4 py-3 font-semibold text-neutral-700 border-r">
          Energy Efficiency
        </td>
        <td className="px-4 py-3 text-neutral-600">
          Advanced inverter technology reduces electricity bills significantly
        </td>
      </tr>

      <tr className="border-b">
        <td className="px-4 py-3 font-semibold text-neutral-700 border-r">
          Condenser Type
        </td>
        <td className="px-4 py-3 text-neutral-600">
          100% copper condenser for better heat transfer and durability
        </td>
      </tr>

      <tr className="border-b">
        <td className="px-4 py-3 font-semibold text-neutral-700 border-r">
          Noise Level
        </td>
        <td className="px-4 py-3 text-neutral-600">
          Low-noise operation ensuring comfortable indoor environment
        </td>
      </tr>

      <tr className="border-b">
        <td className="px-4 py-3 font-semibold text-neutral-700 border-r">
          Air Filtration
        </td>
        <td className="px-4 py-3 text-neutral-600">
          Multi-layer air filtration system for cleaner and healthier air
        </td>
      </tr>

      <tr className="border-b">
        <td className="px-4 py-3 font-semibold text-neutral-700 border-r">
          Refrigerant
        </td>
        <td className="px-4 py-3 text-neutral-600">
          Eco-friendly R32 refrigerant with lower environmental impact
        </td>
      </tr>

      <tr>
        <td className="px-4 py-3 font-semibold text-neutral-700 border-r">
          Warranty
        </td>
        <td className="px-4 py-3 text-neutral-600">
          Official brand warranty on compressor and parts
        </td>
      </tr>
    </tbody>
  </table>
</div>

      </div>
    </div>
  );
};

export default Description;
