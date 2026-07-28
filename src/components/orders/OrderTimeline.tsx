type TimelineStep = {
  title: string;
  completed: boolean;
};

type OrderTimelineProps = {
  steps: TimelineStep[];
};

export default function OrderTimeline({
  steps,
}: OrderTimelineProps) {
  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">
      <h2 className="mb-6 text-xl font-bold">
        Order Timeline
      </h2>

      <div className="space-y-5">
        {steps.map((step, index) => (
          <div
            key={index}
            className="flex items-center gap-4"
          >
            <div
              className={`h-4 w-4 rounded-full ${
                step.completed
                  ? "bg-green-600"
                  : "bg-gray-300"
              }`}
            />

            <p
              className={
                step.completed
                  ? "font-medium"
                  : "text-gray-500"
              }
            >
              {step.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}