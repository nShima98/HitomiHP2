$(function(){
 
    var href =location.href; //1.URLを取得しエンコードする
    var getTitle = $('.news_title').html(); //2.ページのタイトルを取得
     
    //3.URLを取得しエンコードする
    var snsUrl = encodeURIComponent(href);
    var snsTitle = encodeURIComponent(getTitle);
     
    $('.share_button').each(function(){
     
      var sns_obj = $(this).attr('id');　//4.ID名を取得
      var snsCase = sns_obj;
     
      //5.IDを判定してリンク先を出力する
      switch (snsCase){
        //X.FB.LINEでシェア
        //LINE
        case 'page-share-line':
        $(this).attr('href','http://line.me/R/msg/text/?'+ snsTitle +'%20'+ snsUrl);
        break;
        //FB
        case 'page-share-facebook':
        $(this).attr('href','http://www.facebook.com/sharer.php?u='+ snsUrl);
        break;
        //X
        case 'page-share-X':
        $(this).attr('href','http://x.com/share?text='+ snsTitle + '&url='+ snsUrl);
        break;

        //URLをクリップボードに貼り付け
        case 'page-share-copy':
        $(this).attr('href','http://x.com/share?text='+ snsTitle + '&url='+ snsUrl);
        break;
      }
     
      });
    });
    
    function copyUrl() {
        var url = location.href;
        navigator.clipboard.writeText(url);
      }