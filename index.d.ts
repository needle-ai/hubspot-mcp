declare module 'hubspot-mcp' {
  /**
   * Creates a Hubspot MCP server instance.
   * @param apiKey Your Hubspot API key.
   * @param options Optional configuration options (currently untyped).
   * @returns A server instance (currently typed as any).
   */
  export function createHubspotMcpServer(apiKey: string, options?: any): any;
} 