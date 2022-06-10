export const jsCode = `var request = require('request');
var username = 'YOURUSERNAME';
var password = 'YOURPASSWORD';
var GEONODE_DNS = 'PROXY_SERVICE';
var GEONODE_PORT = PROXY_PORT;

var proxyUrl = "http://" + username + ":" + password + "@" + GEONODE_DNS + ":" + GEONODE_PORT;
var proxiedRequest = request.defaults({'proxy': proxyUrl});

proxiedRequest.get("DESTINATION_URL", function (err, resp, body) {
    console.log('error = ', err);
    console.log('body = ', body);
})
`;

export const csCode = `using System;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;

namespace GeonodeHttpExample
{
    public static class Program
    {
        private const string Username = "YOURUSERNAME";
        private const string Password = "YOURPASSWORD";
        private const string GeonodeDns = "http://PROXY_SERVICE:PROXY_PORT";
        private const string UrlToGet = "DESTINATION_URL";

        public static async Task Main()
        {
            using var httpClient = new HttpClient(new HttpClientHandler
            {
                Proxy = new WebProxy(GeonodeDns),
                Credentials = new NetworkCredential(Username, Password)
            });

            using var responseMessage = await httpClient.GetAsync(UrlToGet);

            var contentString = await responseMessage.Content.ReadAsStringAsync();

            Console.WriteLine("Response:" + Environment.NewLine + contentString);
            Console.ReadKey(true);
        }
    }
}
`;
export const goCode = `package main

import (
\t"net/url"
\t"net/http"
\t"fmt"
\t"io/ioutil"
\t"os"
)

const(
\tproxyUrlTemplate = "http://%s:%s@%s:%s"
)

const (
\tusername = "YOURUSERNAME"
\tpassword = "YOURPASSWORD"

\tGEONODE_DNS = "PROXY_SERVICE"
\tGEONODE_PORT = "PROXY_PORT"

\turlToGet = "DESTINATION_URL"
)

func main() {
\tproxy := fmt.Sprintf(proxyUrlTemplate, username, password, GEONODE_DNS, GEONODE_PORT)
\tproxyURL, err := url.Parse(proxy)
\tif err != nil {
\t\tfmt.Printf("failed to form proxy URL: %v", err)
\t\tos.Exit(1)
\t}

\tu, err := url.Parse(urlToGet)
\tif err != nil {
\t\tfmt.Printf("failed to form GET request URL: %v", err)
\t\tos.Exit(1)
\t}

\ttransport := &http.Transport{Proxy: http.ProxyURL(proxyURL)}
\tclient := &http.Client{Transport: transport}

\trequest, err := http.NewRequest("GET", u.String(), nil)
\tif err != nil {
\t\tfmt.Printf("failed to form GET request: %v", err)
\t\tos.Exit(1)
\t}

\tresponse, err := client.Do(request)
\tif err != nil {
\t\tfmt.Printf("failed to perform GET request: %v", err)
\t\tos.Exit(1)
\t}

\tresponseBodyBytes, err := ioutil.ReadAll(response.Body)
\tif err != nil {
\t\tfmt.Printf("could not read response body bytes: %v", err)
\t\tos.Exit(1)
\t}
\tfmt.Printf("Response:\\n%s\\n", string(responseBodyBytes))
}
`;
export const javaCode = `import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.*;

public class Application {
    private static String USERNAME = "YOURUSERNAME";
    private static String PASSWORD = "YOURPASSWORD";

    private static String GEONODE_DNS = "PROXY_SERVICE";
    private static int GEONODE_PORT = PROXY_PORT;

    private static String URL_TO_GET = "DESTINATION_URL";

    public static void main(String[] args) throws IOException {
        final Proxy proxy = new Proxy(Proxy.Type.HTTP, new InetSocketAddress(GEONODE_DNS, GEONODE_PORT));
        Authenticator.setDefault(
                new Authenticator() {
                    public PasswordAuthentication getPasswordAuthentication() {
                        return new PasswordAuthentication(
                                USERNAME, PASSWORD.toCharArray()
                        );
                    }
                }
        );

        final URL url = new URL(URL_TO_GET);
        final URLConnection urlConnection = url.openConnection(proxy);

        final BufferedReader bufferedReader = new BufferedReader(
                new InputStreamReader(urlConnection.getInputStream()));
        final StringBuilder response = new StringBuilder();

        String inputLine;
        while ((inputLine = bufferedReader.readLine()) != null) {
            response.append(inputLine);
        }
        bufferedReader.close();

        System.out.println(String.format("Response:\\n%s", response.toString()));
    }
}
`;
export const perlCode = `#!/usr/bin/env perl

use LWP::Simple qw( $ua get );

my $username = 'YOURUSERNAME';
my $password = 'YOURPASSWORD';

my $GEONODE_DNS = 'PROXY_SERVICE:PROXY_PORT';

my $urlToGet = 'DESTINATION_URL';

$ua->proxy('http', sprintf('http://%s:%s@%s', $username, $password, $GEONODE_DNS));

my $contents = get($urlToGet);
print "Response:\\n$contents"
`;
export const phpCode = `<?php

$username = 'YOURUSERNAME';
$password = 'YOURPASSWORD';
$GEONODE_PORT = PROXY_PORT;
$GEONODE_DNS = 'PROXY_SERVICE';

$urlToGet = 'DESTINATION_URL';

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $urlToGet);
curl_setopt($ch, CURLOPT_HEADER, 0);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch, CURLOPT_PROXYPORT, $GEONODE_PORT);
curl_setopt($ch, CURLOPT_PROXYTYPE, 'HTTP');
curl_setopt($ch, CURLOPT_PROXY, $GEONODE_DNS);
curl_setopt($ch, CURLOPT_PROXYUSERPWD, $username.':'.$password);
$data = curl_exec($ch);
curl_close($ch);

echo $data;
?>
`;
export const pythonCode = `#!/usr/bin/env python3

import requests

username = "YOURUSERNAME"
password = "YOURPASSWORD"
GEONODE_DNS = "PROXY_SERVICE:PROXY_PORT"
urlToGet = "DESTINATION_URL"
proxy = {"http":"http://{}:{}@{}".format(username, password, GEONODE_DNS)}
r = requests.get(urlToGet , proxies=proxy)

print("Response:\\n{}".format(r.text))
`;
export const shallCode = `#!/usr/bin/env bash

export USERNAME=YOURUSERNAME
export PASSWORD=YOURPASSWORD
export GEONODE_DNS=PROXY_SERVICE:PROXY_PORT
curl -x http://$USERNAME:$PASSWORD@$GEONODE_DNS DESTINATION_URL && echo
`;
export const visualBasicCode = `Imports System.IO
Imports System.Net

Module Module1

    Private Const Username As String = "YOURUSERNAME"
    Private Const Password As String = "YOURPASSWORD"
    Private Const GEONODE_DNS As String = "http://PROXY_SERVICE:PROXY_PORT"
    Private Const UrlToGet As String = "DESTINATION_URL"

    Sub Main()
        Dim httpWebRequest = CType(WebRequest.Create(UrlToGet), HttpWebRequest)
        Dim webProxy = New WebProxy(New Uri(GEONODE_DNS)) With {
                .Credentials = New NetworkCredential(Username, Password)
                }
        httpWebRequest.Proxy = webProxy
        Dim httpWebResponse = CType(httpWebRequest.GetResponse(), HttpWebResponse)
        Dim responseStream = httpWebResponse.GetResponseStream()

        If responseStream Is Nothing Then
            Return
        End If

        Dim responseString = New StreamReader(responseStream).ReadToEnd()
        Console.WriteLine($"Response:\\n{responseString}")
        Console.ReadKey()
    End Sub

End Module
`;

export const documentationCode = `
{
    "bandwidth": {
      "usage": 0
    },
    "concurrent": 0,
    "interval": {
      "seconds": 170,
      "timestamp": 1583483937
    },
    "ipinfo": {
      "city": "Murfreesboro",
      "country": "US",
      "fingerprint": {
        "osName": ""
      },
      "ip": "123.228.188.123",
      "isp": "Comcast Cable",
      "online": true,
      "proxyId": "PRQOGT6FYV"
    },
    "release": {
      "count": 0,
      "limit": 7500
    },
    "requestParams": {},
    "threadLimit": 600,
    "transferGB": {
      "limit": "unlimited",
      "usage": "0"
    }
  }`;
