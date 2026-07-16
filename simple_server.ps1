$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://127.0.0.1:5500/")
try {
    $listener.Start()
    Write-Host "Server started on http://127.0.0.1:5500/"
    while ($listener.IsListening) {
        try {
            $context = $listener.GetContext()
            $request = $context.Request
            $response = $context.Response
            
            $url = $request.RawUrl
            # Remove query parameters
            $url = $url.Split('?')[0]
            $url = [System.Uri]::UnescapeDataString($url)
            if ($url -eq "/" -or $url -eq "") { $url = "/index.html" }
            
            $filePath = Join-Path "d:\portfolio\resume" $url.TrimStart('/')
            if (Test-Path $filePath -PathType Leaf) {
                $bytes = [System.IO.File]::ReadAllBytes($filePath)
                
                # Determine content type
                $ext = [System.IO.Path]::GetExtension($filePath).ToLower()
                $contentType = "text/html"
                if ($ext -eq ".css") { $contentType = "text/css" }
                elseif ($ext -eq ".js") { $contentType = "application/javascript" }
                elseif ($ext -eq ".png") { $contentType = "image/png" }
                elseif ($ext -eq ".jpg" -or $ext -eq ".jpeg") { $contentType = "image/jpeg" }
                elseif ($ext -eq ".mp4") { $contentType = "video/mp4" }
                
                $response.ContentType = $contentType
                $response.ContentLength64 = $bytes.Length
                $response.OutputStream.Write($bytes, 0, $bytes.Length)
            } else {
                $response.StatusCode = 404
            }
            $response.OutputStream.Close()
        } catch {
            Write-Host "Request handling error: $_"
        }
    }
} catch {
    Write-Error $_
} finally {
    $listener.Close()
}
