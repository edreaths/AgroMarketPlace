import api from "@/api/client";

export const orderService = {
  async getOrders() {
    const response = await api.get("/orders");
    return response.data;
  },

  async getOrder(id: string) {
    const response = await api.get(`/orders/${id}`);
    return response.data;
  },
};