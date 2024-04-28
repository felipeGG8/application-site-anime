import android.content.Intent;
import android.os.Bundle;
import android.webkit.JavascriptInterface;
import android.webkit.WebResourceRequest;
import android.webkit.WebView;
import android.webkit.WebViewClient;

public class WebViewActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_webview);

        WebView webView = findViewById(R.id.webView);
        webView.getSettings().setJavaScriptEnabled(true);

        // Adicione uma interface JavaScript
        webView.addJavascriptInterface(new WebViewInterface(), "Android");

        webView.setWebViewClient(new WebViewClient() {
            @Override
            public boolean shouldOverrideUrlLoading(WebView view, WebResourceRequest request) {
                // Extrair o ID do URL clicado
                String clickedItemId = extractItemIdFromUrl(request.getUrl().toString());

                // Iniciar uma nova Activity com o ID do item
                Intent intent = new Intent(WebViewActivity.this, DetailsActivity.class);
                intent.putExtra("itemId", clickedItemId);
                startActivity(intent);

                return true; // Indica que a navegação deve ser tratada aqui e não na WebView
            }
        });

        // Carregar sua WebView com o conteúdo desejado
        // webView.loadUrl("file:///android_asset/seu_arquivo_html.html");
    }

    private String extractItemIdFromUrl(String url) {
        // Lógica para extrair o ID do URL, depende da estrutura do seu URL
        // Exemplo: Se o URL for "https://seusite.com/anime?id=123", você pode extrair "123".
        // Substitua esta lógica pela adequada à sua aplicação.
        // Aqui estou assumindo um formato simples para demonstração.
        String[] parts = url.split("id=");
        return parts.length > 1 ? parts[1] : "";
    }

    // Sua WebViewInterface
    public class WebViewInterface {
        @JavascriptInterface
        public void handleItemClicked(String itemId) {
            // Aqui você pode tratar o clique do item no código Java e abrir uma nova Activity com o ID do item
            Intent intent = new Intent(WebViewActivity.this, DetailsActivity.class);
            intent.putExtra("itemId", itemId);
            startActivity(intent);
        }
    }
}
