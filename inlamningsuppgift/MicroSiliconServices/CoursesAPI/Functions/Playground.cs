using HotChocolate.AzureFunctions;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.Functions.Worker;
using Microsoft.Azure.Functions.Worker.Http;
using Microsoft.Extensions.Logging;
using static HotChocolate.ErrorCodes;

namespace CoursesAPI.Functions;

public class Playground(ILogger<GraphQL> logger, IGraphQLRequestExecutor executor) {
    private readonly ILogger<GraphQL> _logger = logger;
    private readonly IGraphQLRequestExecutor _executor = executor;

    [Function("Playground")]
    public async Task<HttpResponseData> Run([HttpTrigger(AuthorizationLevel.Function, "get", Route = "playground")] HttpRequestData req) {

        var res = req.CreateResponse();
        res.Headers.Add("Content-Type", "text/html; charset=utf-8");
        await res.WriteStringAsync(PlaygroundPage());

        return res;
    }

    private string PlaygroundPage() {
        return @"
            <!DOCTYPE html>
            <html>
            <head>
                <title>On the Playground against my will</title>
                <link rel=""stylesheet"" href=""https://cdn.jsdelivr.net/npm/graphql-playground-react/build/static/css/index.css"" />
                <script src=""https://cdn.jsdelivr.net/npm/graphql-playground-react/build/static/js/middleware.js""></script>
            </head>
            <body>
                <div id=""root""></div>
                <script>
                    window.addEventListener('load', function (event) {
                        GraphQLPlayground.init(document.getElementById('root'), {
                            endpoint: '/api/GraphQL'
                        })
                    })
                </script>
            </body>
            </html>";
    }
}