export default {
  async fetch(request): Promise<Response> {
    const destinationURL =
      "https://poised-jupiter-7ea.notion.site/Maturita-196742d468a880a493bad7ec858c269f?pvs=74";
    const statusCode = 301;
    return Response.redirect(destinationURL, statusCode);
  },
} satisfies ExportedHandler;
