// app/ghl-saas-hunt/[slug]/page.tsx (Final Updated)
'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import {
  Heart, MessageCircle, Share2, ExternalLink, X, CheckCircle,
  AlertCircle, User, Mail, Phone, ThumbsUp, Loader2, ArrowLeft,
  Image as ImageIcon, ChevronLeft, ChevronRight
} from 'lucide-react';
import Link from 'next/link';
import { useAuth } from '@/hooks/useAuth';
import VerificationPopup from '@/components/directory/auth/VerificationPopup';

interface Product {
  id: string;
  name: string;
  slug: string;
  logo_url: string;
  category: string;
  custom_category?: string;
  short_description: string;
  website_url: string;
  views_count: number;
  likes_count: number;
  comments_count: number;
  submitter_name: string;
  submitter_email: string;
  published_at: string;
  screenshots?: string[];
}

interface Comment {
  id: string;
  userName: string;
  userEmail: string;
  userPhone: string;
  comment: string;
  likes: number;
  liked_by?: string[];
  verified: boolean;
  createdAt: string;
}

function CommentComponent({ comment, onLike, isLiked }: {
  comment: Comment;
  onLike: (id: string) => void;
  isLiked: boolean;
}) {
  return (
    <div className="bg-gray-50 rounded-xl p-4">
      <div className="flex items-start justify-between mb-2">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-[#0E9BF0] to-[#25C97D] rounded-full flex items-center justify-center text-white text-sm font-bold">
            {comment.userName.charAt(0)}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-gray-900">{comment.userName}</span>
              <span className="text-xs bg-green-100 text-green-700 px-1.5 py-0.5 rounded">Verified</span>
            </div>
            <span className="text-xs text-gray-400">
              {new Date(comment.createdAt).toLocaleDateString()}
            </span>
          </div>
        </div>
        <button
          onClick={() => onLike(comment.id)}
          className={`flex items-center gap-1 text-xs transition-colors ${isLiked ? 'text-[#0E9BF0]' : 'text-gray-400 hover:text-[#0E9BF0]'}`}
        >
          <ThumbsUp className="w-3.5 h-3.5" />
          {comment.likes}
        </button>
      </div>
      <p className="text-gray-600 text-sm ml-10">{comment.comment}</p>
    </div>
  );
}

// Image Gallery Component - Only renders if images exist
function ImageGallery({ images }: { images: string[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!images || images.length === 0) return null;

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <>
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-bold text-gray-900">Screenshots</h3>
          <span className="text-xs text-gray-400">{images.length} images</span>
        </div>

        <div
          className="relative aspect-video bg-gray-100 rounded-xl overflow-hidden cursor-pointer group"
          onClick={() => setIsModalOpen(true)}
        >
          <img
            src={images[currentIndex]}
            alt={`Screenshot ${currentIndex + 1}`}
            className="w-full h-full object-cover"
          />

          {images.length > 1 && (
            <>
              <button
                onClick={(e) => { e.stopPropagation(); prevImage(); }}
                className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/50 rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); nextImage(); }}
                className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/50 rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </>
          )}
        </div>

        {images.length > 1 && (
          <div className="flex gap-2 overflow-x-auto pb-2">
            {images.map((img, idx) => (
              <div
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-16 h-16 rounded-lg overflow-hidden cursor-pointer border-2 transition-all ${currentIndex === idx ? 'border-[#0E9BF0]' : 'border-transparent hover:border-gray-300'
                  }`}
              >
                <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        )}
      </div>

      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
          onClick={() => setIsModalOpen(false)}
        >
          <button
            onClick={() => setIsModalOpen(false)}
            className="absolute top-4 right-4 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <img
            src={images[currentIndex]}
            alt="Full size screenshot"
            className="max-w-[90vw] max-h-[90vh] object-contain"
          />

          {images.length > 1 && (
            <>
              <button
                onClick={(e) => { e.stopPropagation(); prevImage(); }}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); nextImage(); }}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/60 text-sm">
            {currentIndex + 1} / {images.length}
          </div>
        </div>
      )}
    </>
  );
}

export default function ProductDetailPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;
  const { sessionToken, isAuthenticated, isLoading: authLoading, user, sendOTP, verifyOTP, isVerifying } = useAuth();

  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [liked, setLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(0);
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState('');
  const [showVerification, setShowVerification] = useState(false);
  const [verificationAction, setVerificationAction] = useState<'comment' | 'like'>('comment');
  const [commentLikes, setCommentLikes] = useState<Record<string, boolean>>({});
  const [actionLoading, setActionLoading] = useState(false);
  const [pendingAction, setPendingAction] = useState<{ type: 'like' | 'comment'; data?: string } | null>(null);

  // Fetch product data
  // In the fetchProduct useEffect, add sessionToken to headers and set liked state

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      try {
        const headers: HeadersInit = {};
        if (sessionToken) {
          headers['Authorization'] = `Bearer ${sessionToken}`;
        }

        const response = await fetch(`/api/ghl-saas-hunt/products/${slug}`, {
          headers,
        });
        const data = await response.json();

        if (data.success) {
          setProduct(data.data);
          setLikesCount(data.data.likes_count || 0);
          setLiked(data.data.hasLiked || false); // Set liked from API
          setComments(data.data.comments || []);

          await fetch(`/api/ghl-saas-hunt/products/${slug}/increment-view`, {
            method: 'POST',
          });
        }
      } catch (error) {
        console.error('Failed to fetch product:', error);
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchProduct();
    }
  }, [slug, sessionToken]); // Add sessionToken to dependency array

  const handleLike = async () => {
    if (!product) return;

    if (!isAuthenticated || !sessionToken) {
      setPendingAction({ type: 'like' });
      setVerificationAction('like');
      setShowVerification(true);
      return;
    }

    const action = liked ? 'unlike' : 'like';
    // Optimistically update UI
    setLiked(!liked);
    setLikesCount(prev => action === 'like' ? prev + 1 : prev - 1);
    setActionLoading(true);

    try {
      const response = await fetch(`/api/ghl-saas-hunt/products/${slug}/like`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${sessionToken}`
        },
        body: JSON.stringify({ action }),
      });

      const data = await response.json();
      if (!data.success) {
        // Revert on error - don't show alert for duplicate likes
        setLiked(liked);
        setLikesCount(likesCount);
        // Only show alert for non-like errors
        if (!data.error?.includes('already liked') && !data.error?.includes('not liked')) {
          console.error(data.error);
        }
      } else {
        // Update with server response
        setLiked(data.data.hasLiked);
        setLikesCount(data.data.likesCount);
      }
    } catch (error) {
      setLiked(liked);
      setLikesCount(likesCount);
      console.error('Network error:', error);
    } finally {
      setActionLoading(false);
    }
  };

  const handleVerificationSuccess = () => {
    setShowVerification(false);
    // Execute pending action after successful verification
    if (pendingAction?.type === 'like') {
      handleLike();
    } else if (pendingAction?.type === 'comment' && pendingAction.data) {
      submitComment(pendingAction.data);
    }
    setPendingAction(null);
  };

  const submitComment = async (commentText: string) => {
    setActionLoading(true);
    try {
      const response = await fetch(`/api/ghl-saas-hunt/products/${slug}/comments`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${sessionToken}`
        },
        body: JSON.stringify({ comment: commentText }),
      });

      const data = await response.json();
      if (data.success) {
        setComments([data.data, ...comments]);
        setNewComment('');
      } else {
        alert(data.error || 'Failed to add comment');
      }
    } catch (error) {
      alert('Network error. Please try again.');
    } finally {
      setActionLoading(false);
    }
  };

  const handleAddComment = () => {
    if (!newComment.trim()) return;

    // If not authenticated, store pending action and show verification
    if (!isAuthenticated || !sessionToken) {
      setPendingAction({ type: 'comment', data: newComment });
      setVerificationAction('comment');
      setShowVerification(true);
      return;
    }

    submitComment(newComment);
  };

  const handleCommentLike = async (commentId: string) => {
    const isCurrentlyLiked = commentLikes[commentId];
    const action = isCurrentlyLiked ? 'unlike' : 'like';

    setCommentLikes(prev => ({ ...prev, [commentId]: !isCurrentlyLiked }));
    setComments(prev => prev.map(c =>
      c.id === commentId
        ? { ...c, likes: action === 'like' ? c.likes + 1 : c.likes - 1 }
        : c
    ));

    try {
      const response = await fetch(`/api/ghl-saas-hunt/products/${slug}/comments/${commentId}/like`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action, sessionToken }),
      });

      const data = await response.json();
      if (!data.success) {
        setCommentLikes(prev => ({ ...prev, [commentId]: isCurrentlyLiked }));
        setComments(prev => prev.map(c =>
          c.id === commentId
            ? { ...c, likes: isCurrentlyLiked ? c.likes - 1 : c.likes + 1 }
            : c
        ));
      }
    } catch (error) {
      setCommentLikes(prev => ({ ...prev, [commentId]: isCurrentlyLiked }));
      setComments(prev => prev.map(c =>
        c.id === commentId
          ? { ...c, likes: isCurrentlyLiked ? c.likes - 1 : c.likes + 1 }
          : c
      ));
    }
  };

  const getLogoBg = (category: string) => {
    const bgMap: Record<string, string> = {
      'CRM & Sales': 'rgba(167,139,250,0.14)',
      'Automation': 'rgba(37,201,125,0.14)',
      'Marketing': 'rgba(248,208,0,0.14)',
      'Agency Tools': 'rgba(251,146,60,0.14)',
      'Snapshots & Templates': 'rgba(14,155,240,0.14)',
      'White-Label SaaS': 'rgba(244,114,182,0.14)',
      'Healthcare': 'rgba(244,114,182,0.14)',
      'Real Estate': 'rgba(167,139,250,0.14)',
      'Solar': 'rgba(251,146,60,0.14)',
      'Recruitment': 'rgba(14,155,240,0.14)',
      'SEO & Local': 'rgba(37,201,125,0.14)',
    };
    return bgMap[category] || 'rgba(14,155,240,0.14)';
  };

  if (loading || authLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-12 h-12 animate-spin text-[#0E9BF0]" />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Product Not Found</h1>
          <p className="text-gray-500 mb-4">The product you're looking for doesn't exist.</p>
          <Link href="/ghl-saas-hunt" className="bg-[#0E9BF0] text-white px-6 py-2 rounded-lg inline-block">
            Back to Directory
          </Link>
        </div>
      </div>
    );
  }

  const isImageLogo = product.logo_url && (product.logo_url.startsWith('http://') || product.logo_url.startsWith('https://'));
  const displayCategory = product.custom_category || product.category;

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        {/* Hero Section - Dark Theme */}
        <div className="relative overflow-hidden bg-gradient-to-br from-[#1C2E4A] via-[#1C2E4A] to-[#0B1421]">
          <div className="max-w-7xl mx-auto px-4 py-8 md:py-12 relative z-10">
            <button onClick={() => router.back()} className="flex items-center gap-2 text-white/60 hover:text-white transition-colors mb-6">
              <ArrowLeft className="w-4 h-4" />
              Back to Directory
            </button>

            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-2xl flex items-center justify-center flex-shrink-0 border border-white/10 overflow-hidden bg-white/5" style={{ background: getLogoBg(product.category) }}>
                {isImageLogo ? (
                  <img src={product.logo_url} alt={product.name} className="w-full h-full object-cover" />
                ) : (
                  <span className="text-4xl">🚀</span>
                )}
              </div>

              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <h1 className="text-2xl md:text-4xl font-black text-white">{product.name}</h1>
                  <span className="text-sm bg-white/10 text-white/80 px-3 py-1 rounded-full">{displayCategory}</span>
                </div>
                <p className="text-white/60 text-sm md:text-base leading-relaxed max-w-2xl">
                  {product.short_description}
                </p>

                <div className="flex items-center gap-6 mt-4">
                  <div className="flex items-center gap-1 text-white/40 text-sm">
                    <Heart className="w-4 h-4" />
                    <span>{likesCount} likes</span>
                  </div>
                  <div className="flex items-center gap-1 text-white/40 text-sm">
                    <MessageCircle className="w-4 h-4" />
                    <span>{comments.length} comments</span>
                  </div>
                  <div className="flex items-center gap-1 text-white/40 text-sm">
                    <ExternalLink className="w-4 h-4" />
                    <a href={product.website_url} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                      Visit Website
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content - Light Theme */}
        <div className="max-w-7xl mx-auto px-4 py-8 md:py-12">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h2 className="text-xl font-bold text-gray-900 mb-4">About This Product</h2>
                <p className="text-gray-600 leading-relaxed">{product.short_description}</p>
              </div>

              {product.screenshots && product.screenshots.length > 0 && (
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                  <ImageGallery images={product.screenshots} />
                </div>
              )}

              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-gray-900">Comments ({comments.length})</h2>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <MessageCircle className="w-4 h-4" />
                    Join the conversation
                  </div>
                </div>

                <div className="mb-6">
                  <textarea
                    placeholder={isAuthenticated ? "Write your comment..." : "Please verify to leave a comment..."}
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#0E9BF0] focus:ring-2 focus:ring-[#0E9BF0]/20 resize-vertical"
                  />
                  <div className="flex justify-end mt-3">
                    <button
                      onClick={handleAddComment}
                      disabled={!newComment.trim() || actionLoading}
                      className="bg-[#0E9BF0] hover:bg-[#0E9BF0]/90 text-white font-semibold px-6 py-2 rounded-lg transition-all disabled:opacity-50"
                    >
                      {actionLoading ? 'Processing...' : 'Post Comment'}
                    </button>
                  </div>
                  {!isAuthenticated && (
                    <p className="text-xs text-gray-400 mt-2">You'll need to verify your identity before posting.</p>
                  )}
                  {isAuthenticated && user && (
                    <p className="text-xs text-green-600 mt-2">✓ Verified as {user.name}</p>
                  )}
                </div>

                <div className="space-y-4">
                  {comments.length > 0 ? (
                    comments.map((comment) => (
                      <CommentComponent
                        key={comment.id}
                        comment={comment}
                        onLike={handleCommentLike}
                        isLiked={commentLikes[comment.id] || false}
                      />
                    ))
                  ) : (
                    <div className="text-center py-8">
                      <MessageCircle className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                      <p className="text-gray-500">No comments yet. Be the first to share your thoughts!</p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Right Column - Sidebar */}
            <div className="lg:col-span-1">
              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                  <button
                    onClick={() => window.open(product.website_url, '_blank')}
                    className="w-full bg-[#0E9BF0] hover:bg-[#0E9BF0]/90 text-white font-semibold py-3 rounded-lg transition-all flex items-center justify-center gap-2"
                  >
                    Visit Website
                    <ExternalLink className="w-4 h-4" />
                  </button>

                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                    <button
                      onClick={handleLike}
                      disabled={actionLoading}
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${liked ? 'bg-red-50 text-red-500' : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                        } disabled:opacity-50`}
                    >
                      <Heart className={`w-5 h-5 ${liked ? 'fill-red-500 text-red-500' : ''}`} />
                      {likesCount} Likes
                    </button>
                    <button
                      onClick={() => {
                        navigator.clipboard.writeText(window.location.href);
                        alert('Link copied to clipboard!');
                      }}
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-50 text-gray-600 hover:bg-gray-100 transition-all"
                    >
                      <Share2 className="w-5 h-5" />
                      Share
                    </button>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                  <h3 className="text-sm font-bold text-gray-900 mb-3">Submitted By</h3>
                  <div className="space-y-2">
                    <p className="text-sm text-gray-700 font-medium">{product.submitter_name}</p>
                    <p className="text-xs text-gray-500">{product.submitter_email}</p>
                    <p className="text-xs text-gray-400">Published: {new Date(product.published_at).toLocaleDateString()}</p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-[#0E9BF0]/10 to-[#25C97D]/10 border border-[#0E9BF0]/20 rounded-xl p-5">
                  <h4 className="text-sm font-bold text-gray-900 mb-1">Want to build something similar?</h4>
                  <p className="text-xs text-gray-500 mb-3">Get a free GHL SaaS audit from GHL Scale Up</p>
                  <Link href="/ghl-saas-hunt/submit" className="w-full bg-[#F8D000] hover:bg-[#FFE44D] text-gray-900 font-bold py-2 rounded-lg text-sm transition-all block text-center">
                    List Your SaaS →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Verification Popup - Only shown when user is not authenticated */}
      <VerificationPopup
        isOpen={showVerification}
        onClose={() => {
          setShowVerification(false);
          setPendingAction(null);
        }}
        onSuccess={handleVerificationSuccess}
        onSendOTP={sendOTP}
        onVerifyOTP={verifyOTP}
        isLoading={isVerifying}
        title="Verify Your Identity"
        description={verificationAction === 'like' ? "Please verify to like this product" : "Please verify to leave a comment"}
      />
    </>
  );
}